import React, { useEffect, useState } from "react";
import "./ThreadCard.css";

function ThreadCard() {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchThreads() {
      try {
        const response = await fetch("http://localhost:8000/ai/threads");
        const data = await response.json();
        console.log("AI API response:", data);
        setThreads(data.threads || []);
      } catch (error) {
        console.error("Error fetching threads:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchThreads();
  }, []);

  if (loading) return <p>Loading threads...</p>;
  if (!threads.length) return <p>No threads found.</p>;

  return (
    <div className="thread-card-container">
      {threads.map((thread) => (
        <div className="card-block" key={thread.id}>
          <div className="card-header">
            <img
              className="profile-img"
              src="/profile-avatar.jpg"
              alt="user"
            />
            <div>
              <h2 className="card-title">{thread.title}</h2>
              <div className="card-tags">
                {thread.sentiment && (
                  <span className="tag-positive">{thread.sentiment}</span>
                )}
                {thread.summary && <span className="tag-tldr">TL;DR</span>}
              </div>
            </div>
          </div>

          <div className="card-summary">
            <p>
              {thread.summary
                ? `AI summary: ${thread.summary}`
                : "No summary available"}
            </p>
          </div>

          <div className="card-footer">
            <span>{thread.upvotes} upvotes</span>
            <span>{thread.replies} replies</span>
            {thread.tag && <span className="footer-tag">{thread.tag}</span>}
            <button className="open-thread">Open Thread</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ThreadCard;
