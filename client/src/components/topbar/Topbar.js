import React from "react";
import "./Topbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo/logo.png";

const Topbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* company logo */}
          <NavLink className="link" to="/">
            <div className="companyLogo">
              <img className="img-fluid" src={Logo} alt="company_logo" />
            </div>
          </NavLink>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* home page */}
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropbtn" to="/">
                  HOME
                </NavLink>

                {/* dropdown menu */}
                <div className="dropdown-content">
                  <NavLink to="/application">Employers</NavLink>
                </div>
              </li>
              {/* JOBS */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/jobs">
                  JOBS
                </NavLink>
              </li>

              {/* requitment*/}
              <li className="nav-item ">
                <NavLink className="nav-link " to="/recruitment">
                  RECRUITMENT
                </NavLink>
              </li>
              {/* blogs */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/blog">
                  BLOGS
                </NavLink>
              </li>
              {/* about us page */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              {/* contact */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
