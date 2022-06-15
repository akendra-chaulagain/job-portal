import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { updateProfile } from "../../redux/apiCalls";
import "./Profile.css";

const Profile = () => {
  const userId = localStorage.getItem("userId");

  // get user data from user id
  const [didMount, setDidMount] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      setDidMount(true);

      try {
        const res = await axios.get("/user/find/" + userId);
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
    return () => setDidMount(false);
  }, [userId]);

  // update username and email
  const dispatch = useDispatch();
  const [username, setUsername] = useState(userData.username);
  const [email, setEmail] = useState(userData.email);
  const handleSave = (e) => {
    e.preventDefault();
    const data = { username, email };
    updateProfile(userId, data, dispatch);
  };

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
          <form action="" className="form">
            {/* username */}
            <div className="changeUserData">
              <div className="changeUserDataInputField">
                <label htmlFor="">Full Name</label>
                <br />
                <input
                  type="text"
                  defaultValue={userData.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {/* email */}
              <div className="changeUserDataInputField">
                <label htmlFor="">Email</label>
                <br />
                <input
                  type="email"
                  defaultValue={userData.email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* submit button */}
            <div className="submmitButton">
              <button onClick={handleSave}>save changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
