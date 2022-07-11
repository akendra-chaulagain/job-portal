import React, { useEffect } from "react";
import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAdmin } from "../../redux/apiCalls";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebarr = () => setSidebar(!sidebar);

  // get user
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    getUserAdmin(dispatch);
  }, [dispatch]);

  return (
    <>
      {/* side bar top container */}
      <div className="sidebar">
        <div className="sidebarTopContainer">
          <div className="menuIconContainer">
            {/* navbar  on */}
            <i className="fa-solid fa-bars" onClick={showSidebarr}></i>
          </div>
          {/* company logo */}
          <div className="companyLogoSidebar">
            <Link to="/">
              {user.map((item) => (
                <img
                  className="img-fluid"
                  src={item.logo}
                  alt="company_logo"
                  key={item._id}
                />
              ))}
            </Link>
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
              <li
                className="sidebar-item sidebardropdown"
                onClick={showSidebarr}
              >
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link sidebbardropbtn"
                  to="/"
                >
                  Home
                </Link>
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
