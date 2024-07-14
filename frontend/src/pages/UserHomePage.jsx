import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import UserInfo from "../components/UserInfo";
import "./UserHome.css";

const UserHomePage = () => {
  return (
    <div className="main-home-user">
      <div className="books-info">
        <Home />
      </div>
      <div className="user-info">
        <UserInfo />
      </div>
    </div>
  );
};

export default UserHomePage;
