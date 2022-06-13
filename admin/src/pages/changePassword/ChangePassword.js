import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./ChangePassword.css";

const ChangePassword = () => {
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
              <i class="fa-solid fa-circle-info"></i>
              information
            </NavLink>
            {/* key icon(password icons) */}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/password"
            >
              <i class="fa-solid fa-lock"></i>
              security
            </NavLink>
          </div>

          {/* change email and user name input field */}
          <form action="" className="changeUserDataPassword">
            {/* currentPassword */}
            <div className="changeUserDataPasswordField">
              <label htmlFor="">Current Password</label>
              <br />
              <input type="text" placeholder=" Akendra Chaulagain" />
            </div>
            {/* new password */}
            <div className="changeUserDataPasswordField">
              <label htmlFor="">New Password</label>
              <br />
              <input type="email" placeholder="akendra@gmail.com" />
            </div>
            {/* current password */}
            <div className="changeUserDataPasswordField">
              <label htmlFor=""> Password</label>
              <br />
              <input type="email" placeholder="akendra@gmail.com" />
            </div>
          </form>
          {/* submit button */}
          <div className="changePasswordButton">
            <button>save changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
