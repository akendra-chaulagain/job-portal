import React, { useEffect, useState } from "react";
import "./SingleJobs.css";
import Footer from "../../components/footer/Footer";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

const SingleJobs = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // get user by id
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [isLoading, setLoading] = useState(true);

  const [didMount, setDidMount] = useState(false);
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    setLoading(true);
    setDidMount(true);
    const getDataById = async () => {
      try {
        const res = await axios.get("/jobs/find/" + path);
        setJobData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
    setLoading(false);
    return () => setDidMount(false);
  }, [path]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container singlePost">
          <div className="row">
            <div className="col-md-5 jobImg">
              <img
                src="https://images.pexels.com/photos/375889/pexels-photo-375889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </div>
            {/* job desc  */}
            <div className="col-md-7 jobDesc">
              <div className="jobDescTitle text-center">{jobData.title}</div>
              {/* job requirement title*/}
              <div className="jobDescInformation">
                <h3>Basic Job Information</h3>
              </div>
              {/* job requirement desc */}
              <div className="jobDescdata">
                <p dangerouslySetInnerHTML={{ __html: jobData.desc }}></p>
              </div>
              {/* apply button */}
              <div className="applyButton">
                <Link className="link" to="/application">
                  <button>APPLY NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* footer */}
      <Footer />
    </>
  );
};

export default SingleJobs;
