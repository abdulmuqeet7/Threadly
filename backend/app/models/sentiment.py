from transformers import pipeline

# Load sentiment model once at import
sentiment_pipeline = pipeline(
    "sentiment-analysis",
    model="distilbert-base-uncased-finetuned-sst-2-english"
)

def analyze_sentiment(text: str) -> dict:
    """
    Run sentiment analysis on given text.
    Returns: {"label": "POSITIVE", "score": 0.998}
    """
    result = sentiment_pipeline(text)[0]
    return {"label": result["label"], "score": float(result["score"])}
