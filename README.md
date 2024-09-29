# Forger AI 

Welcome to **Forger AI**! This web application allows users to generate personalized cold emails based on job postings and send them to potential clients or recruiters. The application also supports portfolio uploads in CSV format and bulk recruiter uploads as well.

![ForgeR](https://github.com/user-attachments/assets/4345559d-a967-433a-89e8-dec9be0b0521)


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [APIs Used](#apis-used)
- [Setup Instructions](#setup-instructions)
- [How to Use](#how-to-use)
- [YouTube Video](#youtube-video)
- [Contributing](#contributing)
- [License](#license)

## Features

- **URL Input**: Enter a job posting URL to generate a personalized cold email.
- **Email Generation**: Generates a customizable email template based on the provided URL.
- **Recipient Email**: Input the recipient's email address to send the generated email directly.
- **CSV Uploads**: Upload your portfolio and bulk recruiter emails in CSV format.
- **Premium Features**: Access additional premium features for enhanced functionality.
- **Copy and Edit Email**: Easily copy the generated email to your clipboard or edit it for customization.

## Technologies & APIs Used

- **TypeScript**: For a type-safe codebase.
- **Next.js**: For building intuitive interfaces.
- **Langchain**: For managing language models, scraping(webbaseloader) and prompts.
- **Llama**: For generating personalized email content.
- **Groqcloud**: For data handling and storage (add a brief description if available).
- **SendGrid API**: For sending emails to recipients.
- **FastAPI**: For building the backend API.


### API Endpoints

| Method | Endpoint                  | Description                               |
|--------|---------------------------|-------------------------------------------|
| POST   | `/api/generate-email`     | Generates an email based on job post URL |
| POST   | `/api/send-email`         | Sends the generated email to the recipient|
| POST   | `/api/upload-portfolio`    | Uploads the portfolio CSV file           |

## Setup Instructions

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/JuanitaCathy/forger.ai.git
   cd forger.ai
   ```
2. **Install Dependencies:**
   ```
   npm install
   ```
3. ***Set up environment variables:***
   Create a .env file in the root directory and add your `GROQ_API_KEY`
4. **Run the FastAPI backend:**
   ```
   uvicorn main:app --reload
   ```
5. **Run the development server for the frontend:**
   ```
   npm run dev
   ```

## YouTube Video
Check out the demo video for Forger AI: https://youtu.be/FBqhClp0sOY

## Contributing
Contributions are welcome! If you would like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature: git checkout -b feature/YourFeature
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin feature/YourFeature
- Open a pull request.
