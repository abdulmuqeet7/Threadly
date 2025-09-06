from fastapi import APIRouter
from app.database import supabase
from app.models.sentiment import analyze_sentiment
from app.models.summarization import generate_summary
from app.models.toxic import check_toxicity

router = APIRouter(prefix="/ai", tags=["AI"])

@router.get("/threads")
def get_threads():
    response = supabase.table("threads").select("*").execute()
    threads = response.data
    print("=== RAW THREADS FROM DB ===", threads)

    enriched = []
    for thread in threads:
        try:
            title = thread.get("title", "")
            info = thread.get("description", "")

            # ML models
            print("Running ML models...")
            sentiment = analyze_sentiment(title + " " + info)
            summary = generate_summary(info)
            spam_status = check_toxicity(info)

            print("Sentiment:", sentiment)
            print("Summary:", summary)
            print("Spam:", spam_status)

            enriched.append({
                "id": thread.get("id"),
                "title": title,
                "summary": summary,
                "sentiment": sentiment["label"] if isinstance(sentiment, dict) else sentiment,
                "is_spam": spam_status,
                "upvotes": thread.get("upvotes", 0),
                "replies": thread.get("replies", 0),
                "tag": thread.get("tag")
            })
        except Exception as e:
            print("⚠️ Error processing thread:", e)

    return {"threads": enriched}
