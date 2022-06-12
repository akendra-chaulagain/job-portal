import React from "react";
import "./Topbar.css";
import Logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="container-fluid topbar">
        <div className="row">
          <div className="col-4 left">
            <Link className="link" to="/">
              <img className="img-fluid" src={Logo} alt="logo_img" />
            </Link>
          </div>

          <div className="col-8 right text-end">
            <div className="webSiteLink">
              <Link className="link" to="/">
                <i class="fa-solid fa-globe"></i>
              </Link>
            </div>
            <div className="adminData">
              <span>System Admin</span>
            </div>

            {/* admin img  drop doen menu*/}
            <div className="adminImg">
              <div className="dropdown">
                <img
                  clasName="img-fluid  dropdown-toggle"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="profile_img"
                />
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link className="link dropdown-item" to="/">
                      <i class="fa-solid fa-user"></i>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li>
                    <Link className=" link dropdown-item" to="/">
                      <i class="fa-solid fa-gear"></i>
                      <span>Setting</span>
                    </Link>
                  </li>
                  <li></li>
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
