import React, { useEffect, useState } from "react";
import "./Blog.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  // get all blogs
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getAllBlogs(dispatch);
    setLoading(false);
  }, [dispatch]);

  return (
    <>
      <div className="container blog">
        <div className="blogTop">
          <h3 className="text-center">Blogs</h3>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="row">
            {blogs.map((item, id) => (
              <div className="col-6 col-sm-6 col-md-3  blogContainer" key={id}>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  className="link"
                  to={`/single_blog/${item._id}`}
                >
                  <div className="blogContainWrapper">
                    {/* board members photo */}
                    <div class="card" key={id}>
                      <img
                        src={item.img}
                        class="card-img-top"
                        alt="member_img"
                      />
                      <div class="card-body">
                        {/* blog's title */}
                        <h5 class="card-title text-center">{item.title}</h5>
                        {/*date*/}
                        <p className="card-text mb-2">
                          {new Date(item.createdAt).toDateString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Blog;
