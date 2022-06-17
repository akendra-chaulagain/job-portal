import React, { useEffect, useState } from "react";
import "./JobsSection.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../../redux/apiCalls";
import Loader from "../../Loader/Loader";

const JobsSection = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container jobsContent">
            <div className="row">
              <div className="jobsContentTopbar text-center">
                <h1>Availables Jobs</h1>
              </div>
              {/* jobs content */}

              {jobs.slice(0, 12).map((item) => (
                <div
                  className="col-md-4 col-sm-4 jobsContentContainer"
                  key={item._id}
                >
                  <div className="jobdeschData">
                    <Link
                      className="link"
                      to={`/job/${item.title}/${item._id}`}
                    >
                      <h6>{item.title}</h6>
                    </Link>
                    {/* job desc */}
                    <p
                      dangerouslySetInnerHTML={{
                        __html: item.desc.slice(0, 60),
                      }}
                    ></p>
                  </div>
                </div>
              ))}
              {/* view all jobs link */}
              <div className="viewAllLinks text-end">
                <i className="fa-solid fa-eye"></i>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link"
                  to="/jobs"
                ></Link>
              </div>
            </div>
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default JobsSection;
