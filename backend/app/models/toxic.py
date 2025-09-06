from transformers import pipeline

# Load toxicity classifier once
toxic_pipeline = pipeline(
    "text-classification",
    model="unitary/toxic-bert"
)

def check_toxicity(text: str) -> dict:
    """
    Run toxicity classification.
    Returns: {"label": "toxic", "score": 0.95}
    """
    result = toxic_pipeline(text)[0]
    return {"label": result["label"], "score": float(result["score"])}
