import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-logo" role="img" aria-label="chat">
            💬
          </span>
          <span className="navbar-title">Threadly</span>
        </div>
        <ul className="navbar-links">
          <li>
            <button
              className={`nav-btn ${active === "Home" ? "nav-btn-active" : ""}`}
              onClick={() => setActive("Home")}
            >
              Home
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${active === "Search" ? "nav-btn-active" : ""}`}
              onClick={() => setActive("Search")}
            >
              Search
            </button>
          </li>
          <li>
            <button
              className={`nav-btn ${active === "Dashboard" ? "nav-btn-active" : ""}`}
              onClick={() => setActive("Dashboard")}
            >
              Dashboard
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
