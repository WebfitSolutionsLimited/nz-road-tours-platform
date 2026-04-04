from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class EnquiryCreate(BaseModel):
    full_name: str
    email: str
    phone: str
    service_type: str
    pickup_location: str = ""
    dropoff_location: str = ""
    travel_date: str = ""
    num_passengers: int = 1
    message: str = ""


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    full_name: str
    email: str
    phone: str
    service_type: str
    pickup_location: str = ""
    dropoff_location: str = ""
    travel_date: str = ""
    num_passengers: int = 1
    message: str = ""
    status: str = "new"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "NZ Road Tours API"}


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(input: EnquiryCreate):
    enquiry = Enquiry(**input.model_dump())
    doc = enquiry.model_dump()
    await db.enquiries.insert_one(doc)
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def get_enquiries():
    enquiries = await db.enquiries.find({}, {"_id": 0}).to_list(1000)
    return enquiries


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
