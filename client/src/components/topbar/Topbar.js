import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          {/* company logo */}
          <div className="companyLogo">
            <img
              className="img-fluid"
              src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f7f9e5ecc6623f3ecbbe_logo-example2.svg"
              alt="company_logo"
            />
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* home page */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropbtn" to="/">
                  HOME
                </Link>

                {/* dropdown menu */}
                <div className="dropdown-content">
                  <Link to="/application">Employers</Link>
                </div>
              </li>
              {/* JOBS */}
              <li className="nav-item">
                <Link className="nav-link" to="/jobs">
                  JOBS
                </Link>
              </li>

              {/* requitment*/}
              <li className="nav-item ">
                <Link className="nav-link " to="/recruitment">
                  RECRUITMENT
                </Link>
              </li>
              {/* blogs */}
              <li className="nav-item">
                <Link className="nav-link" to="/blog">
                  BLOGS
                </Link>
              </li>
              {/* about us page */}
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT US
                </Link>
              </li>
              {/* contact */}
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
