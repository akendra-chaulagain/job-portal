import React from "react";
import { useState } from "react";
import "./Sidebar.css";

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
            <img
              className="img-fluid"
              src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc6623f3ecbbe_logo-example2.svg"
              alt="company_logo"
            />
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
                <a className="link sidebbardropbtn" href="#">
                  Home
                </a>
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
                {/* home page dropdown */}
                <div className="sidebardropdown-content">
                  <a href="*">Employers</a>
                </div>
              </li>
              {/* about page */}
              <li className="sidebar-item">
                <a className="link" href="*">
                  About us
                </a>
              </li>
              {/* RECRUITMENT */}
              <li className="sidebar-item">
                <a className="link" href="*">
                  Recruitment
                </a>
              </li>
              {/* OUTSOURCING */}
              <li className="sidebar-item ">
                <a className=" sidebarDopbtn " href="*">
                  Outsourcing
                </a>
              </li>
              {/* LEGALIZATION*/}
              <li className="sidebar-item">
                <a className="link" href="*">
                  Legalization
                </a>
              </li>
              {/* blogs*/}
              <li className="sidebar-item">
                <a className="link" href="*">
                  Blogs
                </a>
              </li>
              {/* CONTACT */}
              <li className="sidebar-item">
                <a className="link" href="*">
                  Contact
                </a>
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
