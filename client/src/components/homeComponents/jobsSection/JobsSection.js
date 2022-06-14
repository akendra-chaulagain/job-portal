import React from "react";
import "./JobsSection.css";
import { serviceData } from "./ourServicesData";
import { Link } from "react-router-dom";

const JobsSection = () => {
  return (
    <>
      <div className="container jobsContent">
        <div className="row">
          <div className="jobsContentTopbar text-center">
            <h1>Availables Jobs</h1>
          </div>
          {/* jobs content */}
          {serviceData.map((item, id) => (
              <div
                className="col-md-4 col-sm-4 jobsContentContainer"
                key={item.id}
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
          {/* view all jobs link */}
          <div className="viewAllLinks text-end">
            <i className="fa-solid fa-eye"></i>
            <Link className="link" to="/jobs">
              <p>View All</p>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default JobsSection;
