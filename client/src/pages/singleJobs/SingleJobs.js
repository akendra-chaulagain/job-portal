import React from "react";
import "./SingleJobs.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const SingleJobs = () => {
  return (
    <>
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
            <div className="jobDescTitle text-center">Web developer</div>
            {/* job requirement title*/}
            <div className="jobDescInformation">
              <h3>Basic Job Information</h3>
            </div>
            {/* job requirement desc */}
            <div className="jobDescdata">
              <p>
                <span>-</span>
                Lays out, positions, and secures parts and assemblies according
                to specifications, using straightedge Lays out, positions, and
                secures parts and assemblies according to specifications, using
                straightedge .
              </p>
              <p>
                <span>-</span>
                Lays out, positions, and secures parts and assemblies according
                to specificationson .
              </p>
              <p>
                <span>-</span>
                Lays out, positions, and secures parts and assemblies according
                to specifications, using straightedge, .
              </p>
              <p>
                <span>-</span>
                Lays out, positions, and secures parts and assemblies according
                to specifications, .
              </p>
              <p>
                <span>-</span>
                Lays out, positions, and secures parts and assemblies according
                to specifications.
              </p>
              <p>
                <span>-</span>
                Lays out, positions, and secures parts and assemblies according
                to specifications.
              </p>
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

      {/* footer */}
      <Footer />
    </>
  );
};

export default SingleJobs;
