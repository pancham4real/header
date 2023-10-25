import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="search"> Search...</span>
      <span className="date">Firday, 5 June</span>
      <span className="views">
        <span className="list-view">
          <span className="list-text"> List view </span>
        </span>
        <span className="grid-view">
          <span className="grid-text"> Grid view </span>
        </span>
      </span>
    </div>
  );
};

export default Navbar;
