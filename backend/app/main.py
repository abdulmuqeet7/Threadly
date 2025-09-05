from fastapi import FastAPI
from app.routers.threads import router as threads_router  # ✅ correct import

app = FastAPI()

# Include the router
app.include_router(threads_router)  # ✅ pass the router object here

@app.get("/")
def root():
    return {"message": "Welcome to Threadly API 🚀"}