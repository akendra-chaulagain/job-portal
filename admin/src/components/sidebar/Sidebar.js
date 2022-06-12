import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className=" sidebar">
        <div className="sidebar-box">
          <div className="sidebartitle">MAIN</div>
          <div className="sidebarList">
            {/* it render to home page folder in   */}
            <Link className="link" to="/">
              <li className="sidebarItem mt-1">
                <i class="fa-solid fa-table-columns"></i>
                <span>Dashboard</span>
              </li>
            </Link>
          </div>

          <div className="sidebartitle mt-3">LISTS</div>
          <div className="sidebarList">
            {/* users link which render to userlist page */}
            <Link className="link" to="/jobs">
              <li className="sidebarItem mt-1">
                <i class="fa-solid fa-briefcase"></i>
                <span>Jobs</span>
              </li>
            </Link>
          </div>

          <div className="sidebarList ">
            {/* blog page */}
            <Link className="link" to="/blog">
              <li className="sidebarItem mt-1">
                <i class="fa-solid fa-pen"></i>
                <span>Blog</span>
              </li>
            </Link>
          </div>
          {/* user */}
          <div className="sidebartitle mt-3">USER</div>
          <div className="sidebarList">
            <Link className="link" to="/logout">
              <li className="sidebarItem mt-1">
                {/* logout user */}
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <span>Logout</span>
              </li>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
