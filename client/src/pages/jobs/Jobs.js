import React from "react";
import "./Jobs.css";
import { availableJobs } from "./availableJobs";
import Footer from "../../components/footer/Footer";

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
            {/* trending jobs */}
            <div className="categoryContainer">
              <h3 className="text-center">Trending jobs</h3>
              <div className="categoryItem">
                <span>Web developer</span>
                <span>Web developer</span>
                <span>Web developer</span>
                <span>Web developer</span>
              </div>
            </div>
          </div>

          {availableJobs.map((item, id) => (
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
                    <h6>{item.company}</h6>
                    <p>{item.job}</p>
                    <p>{item.address}</p>
                  </div>
                </div>
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
