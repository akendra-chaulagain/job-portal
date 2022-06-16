import React, { useEffect, useState } from "react";
import "./SingleBlog.css";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const SingleBlog = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  // get user by id
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [isLoading, setLoading] = useState(true);
  const [didMount, setDidMount] = useState(false);
  const [blogData, setBlogData] = useState({});
  useEffect(() => {
    setLoading(true);
    setDidMount(true);
    const getDataById = async () => {
      try {
        const res = await axios.get("/blog/find/" + path);
        setBlogData(res.data);
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
        <div className="container singleBlog">
          {/* blog image */}
          <div className="singleBlogImg">
            <img
              src="https://cdn.pixabay.com/photo/2014/09/24/14/29/macbook-459196__340.jpg"
              alt="blog_img"
            />
          </div>
          {/* blog data */}
          <div className="singleBlogData">
            {/* blog title */}
            <div className="singleBlogTitle">{blogData.title}</div>
            {/* blog author name */}
            <div className="singleBlogAuthor">
              Author: <span>{blogData.author}</span>
              <p> {new Date(blogData.createdAt).toDateString()}</p>
            </div>
            <div className="blogInfo">
              <div dangerouslySetInnerHTML={{ __html: blogData.desc }}></div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default SingleBlog;
