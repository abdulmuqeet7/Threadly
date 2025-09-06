from fastapi import APIRouter
from app.models.sentiment import analyze_sentiment
from app.models.summarization import generate_summary
from app.models.toxic import check_toxicity
from app.database import supabase

router = APIRouter(prefix="/ai2", tags=["AI2"])

@router.post("/threads")
def analyze_thread(payload: dict):
    title = payload.get("title", "")
    description = payload.get("description", "")

    # Run AI models
    sentiment = analyze_sentiment(description)
    summary = generate_summary(description)
    toxicity = check_toxicity(description)

    # Build thread record
    new_thread = {
        "title": title,
        "description": description,
        "summary": summary,
        "sentiment": sentiment["label"],
        "sentiment_score": sentiment["score"],
        "toxicity": toxicity["label"],
        "toxicity_score": toxicity["score"],
        "upvotes": 0,
        "replies": 0,
        "tag": toxicity["label"],  # or any tag you want
    }

    # Save into database
    supabase.table("threads").insert(new_thread).execute()

    return new_thread
