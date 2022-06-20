import React, { useEffect, useState } from "react";
import "./Blog.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { getAllBlogs } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import ReactPaginate from "react-paginate";

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

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, blogs]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

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
            {currentItems.map((item, id) => (
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
                    <div className="card" key={id}>
                      <img
                        src={item.img}
                        className="card-img-top"
                        alt="member_img"
                      />
                      <div className="card-body">
                        {/* blog's title */}
                        <h5 className="card-title text-center">{item.title}</h5>
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
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
      <Footer />
    </>
  );
};

export default Blog;
