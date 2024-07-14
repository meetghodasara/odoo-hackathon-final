import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-left">
        <div className="header-logo">
          <img src="./Logo.png" alt="" className="logo" />
        </div>
        <div className="header-title">Public Library</div>
      </div>
      <div className="header-right">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
