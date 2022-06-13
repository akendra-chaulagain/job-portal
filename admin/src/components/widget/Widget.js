import React from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="container-fluid widget">
      <div className="row">

        {/* left */}
        <div className="col-md-4 mt-4 leftWidge">
          <i className="fa-solid fa-briefcase"></i>
          <h5>Total Jobs</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <p>view all jobs</p>
          </div>
        </div>
        {/* middle */}
        <div className="col-md-4 mt-4 middletWidget">
          <i className="fa-solid fa-users"></i>
          <h5>Total Users</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <p>view all users</p>
          </div>
        </div>
        {/* right */}
        <div className="col-md-4 mt-4 rightWidget">
          <i className="fa-solid fa-pen"></i>
          <h5>Total BLogs</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <p>view all blogs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
