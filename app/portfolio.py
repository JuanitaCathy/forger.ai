import pandas as pd
import sys
import pysqlite3 as sqlite3 
sys.modules["sqlite3"] = sqlite3 
import chromadb
import uuid
from io import StringIO

class Portfolio:
    def __init__(self):
        self.chroma_client = chromadb.PersistentClient('vectorstore')
        self.collection = self.chroma_client.get_or_create_collection(name="portfolio")

    def load_portfolio(self, csv_content=None):
        """Load portfolio either from the CSV content uploaded or from a default file."""
        if csv_content is not None:
            # Read the CSV content from the StringIO object (uploaded file)
            data = pd.read_csv(StringIO(csv_content))
        else:
            # If no CSV content provided, read from default file
            data = pd.read_csv("my_portfolio.csv")

        # Add portfolio data to the ChromaDB collection if not already loaded
        if not self.collection.count():
            for _, row in data.iterrows():
                self.collection.add(
                    documents=[row["Techstack"]],
                    metadatas={"links": row["Links"]},
                    ids=[str(uuid.uuid4())]
                )

    def query_links(self, skills):
        """Query portfolio links based on the provided skills."""
        return self.collection.query(query_texts=skills, n_results=2).get('metadatas', [])
