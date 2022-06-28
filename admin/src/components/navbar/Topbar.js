import React, { useEffect, useState } from "react";
import "./Topbar.css";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { userRequest } from "../../RequestMethod";

const Topbar = () => {
  const userId = localStorage.getItem("userId");
  // get user data from user id
  const [didMount, setDidMount] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      setDidMount(true);

      try {
        const res = await userRequest.get("/user/find/" + userId);
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
    return () => setDidMount(false);
  }, [userId]);

  

  return (
    <>
      <div className="container-fluid topbar">
        <div className="row">
          <div className="col-4 left">
            <Link className="link" to="/">
              <img className="img-fluid" src={Logo} alt="logo_img" />
            </Link>
          </div>

          {/* right side */}
          <div className="col-8 right text-end">
            <div className="adminData">
              <span>{userData.username}</span>
            </div>

            {/* admin img  drop down menu*/}
            <div className="adminImg">
              <div className="dropdown">
                <img
                  className="img-fluid  dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  src={userData.logo}
                  alt="profile_img"
                />

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li>
                    <Link className="link dropdown-item" to="/profile">
                      <i className="fa-solid fa-user"></i>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link className=" link dropdown-item" to="/setting/core">
                      <i className="fa-solid fa-gear"></i>
                      <span>Setting</span>
                    </Link>
                  </li>
                  
                </ul>
              </div>


            </div>


            
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
