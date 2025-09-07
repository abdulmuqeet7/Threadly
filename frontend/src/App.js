import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {activePage === "Home" && <Home />}
      {activePage === "Search" && <Search />}
      {activePage === "Dashboard" && <Dashboard />}
    </div>
  );
}

export default App;
