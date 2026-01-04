import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header">
      <Link to="/">
        <img
          id="logo"
          src="/Media/Logos/birth_justice_warriors_72dpi.jpg"
          alt="BirthJusticeWarriors Logo"
        />
      </Link>
      <nav className="nav">
        <div className="dropdown">
          <Link to="/" className="dropbtn">
            Home
          </Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">About</button>
          <div className="dropdown-content">
            <Link to="/mission">Mission</Link>
            <Link to="/action">Action</Link>
            <Link to="/founders">Founders</Link>
          </div>
        </div>
        <div className="dropdown">
          <Link to="/resource_guide" className="dropbtn">
            Resource Guide
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
