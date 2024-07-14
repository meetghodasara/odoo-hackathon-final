import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <div className="user-profile">
        <div className="profile-card">
          <div className="profile-img">
            <img src="img/user-profile.png" alt="User Profile" />
          </div>
          <div className="profile-details">
            <h3>User Name</h3>
            <p>Role: User</p>
            <p>Status: Active</p>
          </div>
        </div>

        <div className="address-details">
          <p>Street: 123 Main St</p>
          <p>City: City</p>
          <p>State: State</p>
          <p>Zip: Zip</p>
        </div>

        <div className="contact-details">
          <p>Email: user@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
