import React from "react";
import "./Widget.css";
import { Link } from "react-router-dom";

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
            <Link className="link" to="/jobs">
              view all jobs
            </Link>
          </div>
        </div>
        {/* middle */}
        <div className="col-md-4 mt-4 middletWidget">
          <i class="fa-solid fa-shapes"></i>
          <h5>Total Category</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <Link className="link" to="/category">
              view all category
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="col-md-4 mt-4 rightWidget">
          <i className="fa-solid fa-pen"></i>
          <h5>Total BLogs</h5>
          <p>12890</p>
          <div className="seeAlluser">
            <Link className="link" to="/blog">
              view all blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
