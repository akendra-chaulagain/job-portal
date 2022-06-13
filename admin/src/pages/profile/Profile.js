import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileContainer">
          {/* pfofile top content */}
          <div className="profileTitil">Profile</div>
          <div className="profileTopbar">
            {/* information icon */}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/profile"
            >
              <i className="fa-solid fa-circle-info"></i>
              information
            </NavLink>
            {/* key icon (change password)*/}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/password"
            >
              <i className="fa-solid fa-lock"></i>
              security
            </NavLink>
          </div>

          {/* change email and user name input field */}
          <form action="" className="changeUserData">
            {/* change  full name */}
            <div className="changeUserDataInputField">
              <label htmlFor="">Full Name</label>
              <br />
              <input type="text" placeholder=" Akendra Chaulagain" />
            </div>
            {/* change email */}
            <div className="changeUserDataInputField">
              <label htmlFor="">Email</label>
              <br />
              <input type="email" placeholder="akendra@gmail.com" />
            </div>
          </form>
          {/* submit button */}
          <div className="submmitButton">
            <button>save changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
