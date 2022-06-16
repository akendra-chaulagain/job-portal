import React, { useEffect, useState } from "react";
import "./Jobs.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Category from "../../components/category/Category";
import { useDispatch, useSelector } from "react-redux";
import {  getAllJobs } from "../../redux/apiCalls";
import Loader from "../../components/Loader/Loader";

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);

  // loading component
  const [isLoading, setLoading] = useState(true);
  // get all jobs
  useEffect(() => {
    setLoading(true);
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);

  // search jobs
  const [searchInput, setSearchInput] = useState("");
  const [foundJobs, setFoundJobs] = useState([]);
  const keys = ["title", "desc", "cat"];
  const searchData = () => {
    if (searchInput == null) return;
    setFoundJobs(
      jobs.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(searchInput))
      )
    );
  };

  

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container jobs">
          <div className="row">
            {/* top data with img */}
            <div className="aboutTopData">
              <h3 className="text-center">Jobs</h3>
            </div>
            {/* search container */}
            <div className="searchContainer text-center">
              <div className="searechInputField">
                <input
                  type="search"
                  placeholder="Search your jobs..."
                  onChange={(e) => setSearchInput(e.target.value)}
                />
                <span onClick={searchData}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
              {/* category from category section */}
              <Category />
            </div>
            {foundJobs.length <= 0 ? (
              <>
                {/* CSS OF JOB CONTAINER IS SAME AS JOSECTION FROM COMPONENT/HOMECOMPONENT  */}
                {jobs.map((item, id) => (
                  <div
                    className="col-md-4 col-sm-4 jobsContentContainer"
                    key={id}
                  >
                    <div className="jobsImg">
                      <img className="img-fluid" src={item.img} alt="" />
                    </div>

                    <div className="jobdeschData">
                      <Link
                        className="link"
                        to={`/job/${item.title}/${item._id}`}
                      >
                        <h6>{item.title}</h6>
                      </Link>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                {/* render data after search */}
                {foundJobs.map((item, id) => (
                  <div
                    className="col-md-4 col-sm-4 jobsContentContainer"
                    key={id}
                  >
                    <div className="jobsImg">
                      <img className="img-fluid" src={item.img} alt="" />
                    </div>

                    <div className="jobdeschData">
                      <Link
                        className="link"
                        to={`/job/${item.title}/${item._id}`}
                      >
                        <h6>{item.title}</h6>
                      </Link>
                      <p>{item.location}</p>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Jobs;
