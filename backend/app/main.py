from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers.threads import router as threads_router
from app.routers.ai import router as ai_router

app = FastAPI(title="Threadly API 🚀")

# ✅ CORS setup (important for React frontend)
origins = [
    "http://localhost:3000",  # React dev server
    "http://localhost:3001",  # if you use 3001
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,   # you can use ["*"] during dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Include thread routes
app.include_router(threads_router)
app.include_router(ai_router) 

@app.get("/")
def root():
    return {"message": "Welcome to Threadly API 🚀", "docs": "/docs"}
