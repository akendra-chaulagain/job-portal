import React from "react";
import "./Jobs.css";
import { availableJobs } from "./availableJobs";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Category from "../../components/category/Category";

const Jobs = () => {
  return (
    <>
      <div className="container jobs">
        <div className="row">
          {/* top data with img */}
          <div className="aboutTopData">
            <h3 className="text-center">JOBS</h3>
          </div>
          {/* search container */}
          <div className="searchContainer text-center">
            <div className="searechInputField">
              <input type="search" placeholder="Search your jobs..." />
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
            {/* category from category section */}
            <Category />
          </div>

          {availableJobs.map((item, id) => (
            <div
              className="col-md-4 col-sm-4 jobsContentContainer"
              key={id}
            >
              <div className="jobsImg">
                <img className="img-fluid" src={item.img} alt="" />
              </div>

              <div className="jobdeschData">
                <Link className="link" to="/job/:waiter">
                  <h6>{item.company}</h6>
                </Link>
                <p>{item.job}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Jobs;
