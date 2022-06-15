import React, { useEffect, useState } from "react";
import "./Widget.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog, getAllCategory, getAllJobs } from "../../redux/apiCalls";

const Widget = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  // get all jobs
  const jobs = useSelector((state) => state.jobs.jobs);
  useEffect(() => {
    setLoading(true);
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);

  // category
  const categoryData = useSelector((state) => state.category.categorys);

  // get all jobs
  useEffect(() => {
    getAllCategory(dispatch);
  }, [dispatch]);

  // blogs
  const blogs = useSelector((state) => state.blog.blogs);

  // get all blogs
  useEffect(() => {
    getAllBlog(dispatch);
  }, [dispatch]);

  return (
    <div className="container-fluid widget">
      <div className="row">
        {/* left */}
        {/* jobs */}
        <div className="col-md-4 mt-4 leftWidge">
          <i className="fa-solid fa-briefcase"></i>
          <h5>Total Jobs</h5>
          <p>{jobs.length}</p>
          <div className="seeAlluser">
            <Link className="link" to="/jobs">
              view all jobs
            </Link>
          </div>
        </div>
        {/* middle */}
        {/* category */}
        <div className="col-md-4 mt-4 middletWidget">
          <i class="fa-solid fa-shapes"></i>
          <h5>Total Category</h5>
          <p>{categoryData.length}</p>
          <div className="seeAlluser">
            <Link className="link" to="/category">
              view all category
            </Link>
          </div>
        </div>
        {/* right */}
        {/* blog */}
        <div className="col-md-4 mt-4 rightWidget">
          <i className="fa-solid fa-pen"></i>
          <h5>Total BLogs</h5>
          <p>{blogs.length}</p>
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
