import React from "react";
import "./Navbar.css";

const Navbar = ({ activePage, setActivePage }) => {
  return (
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
            className={`nav-btn ${activePage === "Home" ? "nav-btn-active" : ""}`}
            onClick={() => setActivePage("Home")}
          >
            Home
          </button>
        </li>
        <li>
          <button
            className={`nav-btn ${activePage === "Search" ? "nav-btn-active" : ""}`}
            onClick={() => setActivePage("Search")}
          >
            Search
          </button>
        </li>
        <li>
          <button
            className={`nav-btn ${activePage === "Dashboard" ? "nav-btn-active" : ""}`}
            onClick={() => setActivePage("Dashboard")}
          >
            Dashboard
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
