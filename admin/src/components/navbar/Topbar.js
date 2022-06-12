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

            {/* admin img */}
            <div className="adminImg">
              <img
                className="img-fluid"
                src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
