from fastapi import FastAPI, HTTPException, UploadFile, File
from pydantic import BaseModel
from chains import Chain
from portfolio import Portfolio
from utils import clean_text
from langchain_community.document_loaders import WebBaseLoader

app = FastAPI()

# Initialize AI chain and portfolio
chain = Chain()
portfolio = Portfolio()

# Define the data model for incoming requests
class URLRequest(BaseModel):
    url: str

class MailResponse(BaseModel):
    email: str

# API to handle cold email generation
@app.post("/generate-email", response_model=MailResponse)
async def generate_email(request: URLRequest):
    try:
        # Load the page content from the provided URL
        loader = WebBaseLoader([request.url])
        data = clean_text(loader.load().pop().page_content)

        # Extract job information
        portfolio.load_portfolio()
        jobs = chain.extract_jobs(data)
        
        if jobs:
            job = jobs[0]  # Process the first job
            skills = job.get('skills', [])
            links = portfolio.query_links(skills)
            email = chain.write_mail(job, links)
            return MailResponse(email=email)
        else:
            raise HTTPException(status_code=404, detail="No jobs found.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An Error Occurred: {e}")


# API to upload portfolio CSV
@app.post("/upload-portfolio")
async def upload_portfolio(file: UploadFile = File(...)):
    try:
        content = await file.read()  # Read file content as bytes
        content = content.decode("utf-8")  # Convert to string
        portfolio.load_portfolio(csv_content=content)
        return {"message": "Portfolio uploaded successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An error occurred while uploading the portfolio: {e}")
