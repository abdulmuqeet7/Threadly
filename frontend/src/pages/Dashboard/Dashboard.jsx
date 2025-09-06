import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [threads, setThreads] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  // fallback summary if AI fails
  const getSummary = (text) =>
    text.length > 100 ? text.substring(0, 100) + "..." : text;

  const handleCreateThread = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("All fields required");
      return;
    }

    setLoading(true);

    let aiResults = {};
    try {
      const response = await fetch("http://127.0.0.1:8002/ai2/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          description: description.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      aiResults = await response.json();
    } catch (err) {
      console.error("❌ Error analyzing thread:", err);
    } finally {
      setLoading(false);
    }

    const newThread = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      summary: aiResults.summary || getSummary(description.trim()),
      upvotes: 0,
      replies: 0,
      tag: aiResults.toxicity?.label || "Unknown",
      sentiment: aiResults.sentiment?.label || "Neutral",
      sentimentScore: aiResults.sentiment?.score || 0,
      toxicityScore: aiResults.toxicity?.score || 0,
    };

    setThreads([newThread, ...threads]);
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return (
    <div className="dashboard-container">
      <h1>Thread Dashboard</h1>

      <button
        className="create-thread-btn"
        onClick={() => setShowForm((prev) => !prev)}
      >
        {showForm ? "Cancel" : "Create Thread"}
      </button>

      {showForm && (
        <form className="thread-form" onSubmit={handleCreateThread}>
          <label htmlFor="title">Thread Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter thread title"
            required
          />

          <label htmlFor="description">Thread Details</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter thread details"
            rows={6}
            required
          />

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Analyzing..." : "Submit Thread"}
          </button>
        </form>
      )}

      <div className="thread-list">
        {threads.length === 0 && <p>No threads created yet.</p>}

        {threads.map((thread) => (
          <div className="thread-card" key={thread.id}>
            <h2 className="thread-title">{thread.title}</h2>
            <p className="thread-summary">
              <strong>Summary:</strong> {thread.summary}
            </p>
            <p className="thread-description">{thread.description}</p>
            <p>
              <strong>Sentiment:</strong> {thread.sentiment} (
              {thread.sentimentScore.toFixed(2)})
            </p>
            <p>
              <strong>Toxicity:</strong> {thread.tag} (
              {thread.toxicityScore.toFixed(2)})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
