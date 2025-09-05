import React from "react";
import "./Search.css";

const threads = [
  {
    id: 1,
    title: "What icebreakers actually work on Zoom?",
    summary: "AI summary: Rotate facilitation, 7-minute cap, and theme prompts. Sentiment: Positive.",
    upvotes: 312,
    replies: 64,
    category: "Tips",
  },
  {
    id: 2,
    title: "Async standup templates that reduce noise",
    summary: "AI summary: Use 3-question format + blockers. Auto-thread long updates. Toxicity: None.",
    upvotes: 198,
    replies: 41,
    category: "Template",
  }
];

const Search = () => (
  <div className="search-root">
    <h2 className="search-title">Search</h2>
    <div className="search-bar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search threads, users, topics..."
      />
      <button className="search-btn">Search</button>
    </div>
    <div className="thread-list">
      {threads.map(thread => (
        <div className="thread-card" key={thread.id}>
          <div className="thread-title-row">
            <span className="thread-icon">{thread.id === 1 ? "🗨️" : "🗓️"}</span>
            <span className="thread-title">{thread.title}</span>
          </div>
          <div className="thread-summary">{thread.summary}</div>
          <div className="thread-meta">
            <span>{thread.upvotes} upvotes</span>
            <span>•</span>
            <span>{thread.replies} replies</span>
            <span>•</span>
            <span>{thread.category}</span>
          </div>
          <button className="open-thread-btn">Open Thread</button>
        </div>
      ))}
    </div>
  </div>
);

export default Search;
