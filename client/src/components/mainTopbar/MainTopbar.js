import React from "react";
import "./MainTopbar.css";

const MainTopbar = () => {
  return (
    <>
      <div className="container-fluid mainTopbar">
        <div className="row">
          {/* left side contain */}
          <div className="col-4 leftSideMainTopBar">
            {/* location icon */}
            <div className="locationIcon">
              <i class="fa-solid fa-location-dot"></i>
              <span>Kathmandu, Nepal</span>
            </div>
          </div>
          {/* middle part contain */}
          <div className="col-4 middleSideMainTopBar">
            <div className="phoneCallIcon">
              <i class="fa-solid fa-phone"></i>
              <span>+564668658</span>
            </div>
            <div className="officeTimeIcon">
              <i class="fa-solid fa-clock"></i>
              <span>Mon - Fri: 9:00AM - 8:00PM</span>
            </div>
          </div>
          {/* right side contain */}
          <div className="col-4 rightSidemainTopBar">
            <div className="rightSideicons">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTopbar;
