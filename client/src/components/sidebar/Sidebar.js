import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebarr = () => setSidebar(!sidebar);
  return (
    <>
      {/* side bar top container */}
      <div className="sidebar">
        <div className="sidebarTopContainer">
          <div className="menuIconContainer">
            {/* navbar  on */}
            <i className="fa-solid fa-bars" onClick={showSidebarr}></i>
          </div>
          <div className="companyLogoSidebar">
            <img className="img-fluid" src={Logo} alt="company_logo" />
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
              <li className="sidebar-item sidebardropdown">
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link sidebbardropbtn"
                  to="/"
                >
                  Home
                </Link>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
                {/* home page dropdown */}
                <div className="sidebardropdown-content" onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    to="/application"
                  >
                    Employers
                  </Link>
                </div>
              </li>
              {/* jobs page */}
              <li className="sidebar-item" onClick={showSidebarr}>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link"
                  to="/jobs"
                >
                  JOBS
                </Link>
              </li>
              {/* RECRUITMENT */}
              <li className="sidebar-item" onClick={showSidebarr}>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link"
                  to="/recruitment"
                >
                  RECRUITMENT
                </Link>
              </li>
              {/* BLOGS */}
              <li className="sidebar-item " onClick={showSidebarr}>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className=" sidebarDopbtn "
                  to="/blog"
                >
                  BLOGS
                </Link>
              </li>
              {/* LEGALIZATION*/}
              <li className="sidebar-item" onClick={showSidebarr}>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link"
                  to="/about"
                >
                  ABOUT US
                </Link>
              </li>
              {/* blogs*/}
              <li className="sidebar-item" onClick={showSidebarr}>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link"
                  to="/contact"
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default Sidebar;
