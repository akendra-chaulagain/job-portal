import React from "react";
import "./Topbar.css";

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
                <a className="nav-link dropbtn" href="/">
                  HOME
                </a>
                {/* dropdown menu */}
                <div className="dropdown-content">
                  <a href="*">Employers</a>
                </div>
              </li>
              {/* about us page */}
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>
              {/* requitment*/}
              <li className="nav-item ">
                <a className="nav-link " href="/services">
                  RECRUITMENT
                </a>
              </li>
              {/* outsourcing */}
              <li className="nav-item">
                <a className="nav-link" href="/blogs">
                  OUTSOURCING
                </a>
              </li>
              {/* legalization */}
              <li className="nav-item">
                <a className="nav-link" href="/carrers">
                  LEGALIZATION
                </a>
              </li>
              {/* blogs */}
              <li className="nav-item">
                <a className="nav-link" href="/carrers">
                  BLOGS
                </a>
              </li>
              {/* contact */}
              <li className="nav-item">
                <a className="nav-link" href="/contactt">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
