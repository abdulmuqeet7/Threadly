from transformers import pipeline

# Load summarizer model once
summarizer_pipeline = pipeline(
    "summarization",
    model="facebook/bart-large-cnn"
)

def generate_summary(text: str) -> str:
    """
    Summarize input text.
    """
    result = summarizer_pipeline(
        text,
        max_length=60,
        min_length=15,
        do_sample=False
    )
    return result[0]["summary_text"]
