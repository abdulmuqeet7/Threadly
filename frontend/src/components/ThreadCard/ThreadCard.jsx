import React from "react";
import "./ThreadCard.css";

function CommunityCard() {
  return (
    <div className="community-card">
      <div className="card-block">
        <div className="card-header">
          <img className="profile-img" src="/profile-avatar.jpg" alt="user" />
          <div>
            <h2 className="card-title">
              How do we curb misinformation with community tools?
            </h2>
            <div className="card-tags">
              <span className="tag-positive">Positive</span>
              <span className="tag-tldr">TL;DR</span>
            </div>
          </div>
        </div>
        <div className="card-summary">
          <p>
            AI summary: Encourage transparent sourcing, community fact-checking, and reputation systems. Balance speed with verification.
          </p>
        </div>
        <div className="card-footer">
          <span>532 upvotes</span>
          <span>89 replies</span>
          <span className="footer-tag">Product</span>
          <button className="open-thread">Open Thread</button>
        </div>
      </div>

      <div className="card-block">
        <div className="card-header">
          <img className="profile-img" src="/profile-avatar.jpg" alt="user" />
          <div>
            <h2 className="card-title">
              How do we curb misinformation with community tools?
            </h2>
            <div className="card-tags">
              <span className="tag-positive">Positive</span>
              <span className="tag-tldr">TL;DR</span>
            </div>
          </div>
        </div>
        <div className="card-summary">
          <p>
            AI summary: Encourage transparent sourcing, community fact-checking, and reputation systems. Balance speed with verification.
          </p>
        </div>
        <div className="card-footer">
          <span>532 upvotes</span>
          <span>89 replies</span>
          <span className="footer-tag">Product</span>
          <button className="open-thread">Open Thread</button>
        </div>
      </div>

      <div className="card-block">
        <div className="card-header">
          <img className="profile-img" src="/profile-avatar.jpg" alt="user" />
          <div>
            <h2 className="card-title">
              How do we curb misinformation with community tools?
            </h2>
            <div className="card-tags">
              <span className="tag-positive">Positive</span>
              <span className="tag-tldr">TL;DR</span>
            </div>
          </div>
        </div>
        <div className="card-summary">
          <p>
            AI summary: Encourage transparent sourcing, community fact-checking, and reputation systems. Balance speed with verification.
          </p>
        </div>
        <div className="card-footer">
          <span>532 upvotes</span>
          <span>89 replies</span>
          <span className="footer-tag">Product</span>
          <button className="open-thread">Open Thread</button>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
