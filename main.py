from typing import List
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(
    title="Intelligent Commission Qualification Engine",
    description="API for automating commission qualification processes",
    version="1.0.0"
)

class Deal(BaseModel):
    id: int
    account_name: str
    amount: float
    sales_rep: str
    status: str

@app.get("/")
def read_root():
    """Welcome endpoint with API information."""
    return {
        "message": "Welcome to the Intelligent Commission Qualification Engine API",
        "version": "1.0.0",
        "status": "operational",
        "endpoints": {
            "health": "/health",
            "deals": "/deals",
            "documentation": "/docs",
            "openapi": "/openapi.json"
        }
    }

@app.get("/health")
def health_check():
    """Health check endpoint to verify the API is running."""
    return {"status": "ok"}

@app.get("/deals", response_model=List[Deal])
def get_deals():
    """Sample endpoint returning a static list of deals."""
    return [
        Deal(id=1, account_name="Acme Corp", amount=10000.0, sales_rep="Alice", status="Qualified"),
        Deal(id=2, account_name="Beta LLC", amount=5000.0, sales_rep="Bob", status="Manual Review"),
        Deal(id=3, account_name="Gamma Inc", amount=7500.0, sales_rep="Charlie", status="Disqualified"),
    ]

# TODO: Add database integration (PostgreSQL) once ready
# from psycopg2 import connect
# ... 