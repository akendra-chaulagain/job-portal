import React, { useEffect } from "react";
import { useState } from "react";
import "./SliderBar.css";
import { Link } from "react-router-dom";
import { userRequest } from "../../RequestMethod";

const SliderBar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebarr = () => setSidebar(!sidebar);

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
      {/* side bar top container */}
      <div className="SliderBar">
        <div className="sidebarTopContainer">
          <div className="menuIconContainer">
            {/* navbar  on */}
            <i className="fa-solid fa-bars" onClick={showSidebarr}></i>
          </div>

          {/* right side content with user image and progile page */}
          <div className="rightSideSlider text-end">
            <div className="rightSideAdminData">
              <span>{userData.username}</span>
            </div>

            {/* admin img  drop down menu*/}
            <div className="rightSideAdminImg">
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
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="sideBarWrappper">
          {/* nav close */}
          <div className={sidebar ? "side-menu  " : "side-menu active"}>
            <div className="closeNavIcon">
              <i className=" fa-solid fa-xmark" onClick={showSidebarr}></i>
            </div>
            <br />

            <ul className="sidebar-nav">
              {/* home page */}
              <li className="sidebar-item " onClick={showSidebarr}>
                <h3>Main</h3>
                <Link className="link " to="/">
                  <i className="fa-solid fa-table-columns"></i> Dashboard
                </Link>
              </li>

              {/* jobs page */}
              <li className="sidebar-item" onClick={showSidebarr}>
                <h3>Lists</h3>
                <Link className="link" to="/jobs">
                  <i className="fa-solid fa-briefcase"></i>
                  Jobs
                </Link>
              </li>
              {/* category */}
              <li className="sidebar-item" onClick={showSidebarr}>
                <Link className="link" to="/category">
                  <i className="fa-solid fa-shapes"></i>
                  Category
                </Link>
              </li>
              {/* Blog page */}
              <li className="sidebar-item" onClick={showSidebarr}>
                <Link className="link" to="/blog">
                  <i className="fa-solid fa-pen"></i>
                  Blog
                </Link>
              </li>
              {/* logout */}
              <li className="sidebar-item" onClick={showSidebarr}>
                <h3>User</h3>
                <Link className="link" to="*">
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderBar;
