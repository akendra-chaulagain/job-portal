import React from "react";
import { useState } from "react";
import "./SliderBar.css";
import { Link } from "react-router-dom";

const SliderBar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebarr = () => setSidebar(!sidebar);
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
            <div className="rightSidewebSiteLink">
              <Link className="link" to="/">
                <i className="fa-solid fa-globe"></i>
              </Link>
            </div>
            <div className="rightSideAdminData">
              <span>System Admin</span>
            </div>

            {/* admin img  drop down menu*/}
            <div className="rightSideAdminImg">
              <div className="dropdown">
                <img
                  className="img-fluid  dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
