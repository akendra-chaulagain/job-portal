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
            <div className="col-md-4 jobsContentContainer" key={id}>
              <div className="containWrapper">
                <div className="row">
                  <div className="col-5">
                    {/* contain img */}
                    <div className="containImg">
                      <img src={item.img} alt="our_service_img" />
                    </div>
                  </div>
                  <div className="col-7 jobContainData">
                    {/* company name */}
                    <Link className="link" to="/job/waiter">
                      <h6>{item.company}</h6>
                    </Link>
                    <p>{item.job}</p>
                    <p>{item.address}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* view all jobs link */}
          <div className="viewAllLinks text-end">
            <i class="fa-solid fa-eye"></i>
            <Link className="link" to="/jobs">
              <p>View All</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsSection;
