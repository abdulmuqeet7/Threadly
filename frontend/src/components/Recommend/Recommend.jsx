import React from "react";
import "./Recommend.css";

const threads = [
  {
    title: "Ask: Remote team rituals",
    members: "1.1k members active"
  },
  {
    title: "Designers Learning AI",
    members: "842 members active"
  },
  {
    title: "Designers Learning AI",
    members: "842 members active"
  },
  {
    title: "Designers Learning AI",
    members: "842 members active"
  },
  {
    title: "Designers Learning AI",
    members: "842 members active"
  },
  {
    title: "Deploys & Incidents",
    members: "654 members active"
  }
];

function Recommend() {
  return (
    <div className="rec-threads-container">
      <h3 className="rec-threads-header">Recommended Threads</h3>
      <div className="rec-threads-list">
        {threads.map((thread,i) => (
          <div className="rec-thread-card" key={i}>
            <div className="rec-thread-hash">#</div>
            <div className="rec-thread-info">
              <div className="rec-thread-title">{thread.title}</div>
              <div className="rec-thread-members">{thread.members}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommend;
