# app/routers/threads.py
from fastapi import APIRouter
from app.database import supabase

# define the router
router = APIRouter(prefix="/threads", tags=["Threads"])

@router.get("/")
def get_threads():
    response = supabase.table("threads").select("*").execute()
    # it worked just had to reload once more for the new high privileger key to work and bypass rls
    return {
        "raw_response": response,      # full object
        "data": response.data,         # rows returned
    }

@router.post("/")
def add_thread(id: int , title: str,  description: str,expression: str, spam: bool, replies: int,    upvotes: int ,summary: str, tag: str):
        response = supabase.table("threads").insert({
        "id": id,
        "title": title,
        "description": description,
        "expression": expression,
        "spam": spam,
        "replies": replies,
        "upvotes": upvotes,
        "summary": summary,
        "tag": tag
    }).execute()
        return response.data


