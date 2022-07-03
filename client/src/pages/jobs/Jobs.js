import React, { useEffect, useState } from "react";
import "./Jobs.css";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, getAllJobs } from "../../redux/apiCalls";
import Loader from "../../components/Loader/Loader";
import ReactPaginate from "react-paginate";

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

  // get all category
  const categoryData = useSelector((state) => state.category.categorys);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    getAllCategory(dispatch);
    return () => setDidMount(false);
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

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length / itemsPerPage));
  }, [itemOffset, jobs]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
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
              {/* category  items*/}
              <div className="container-fluid category">
                <h3>Trending Jobs</h3>
                <div className="row">
                  {categoryData.map((item) => (
                    <div
                      className=" col-md-2 col-3 categoryItem"
                      key={item._id}
                    >
                      <Link className="link" to={`/job/trending/${item.title}`}>
                        <option>{item.title}</option>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {foundJobs.length <= 0 ? (
              <>
                {/* CSS OF JOB CONTAINER IS SAME AS JOSECTION FROM COMPONENT/HOMECOMPONENT  */}
                {currentItems.map((item) => (
                  <div
                    className="col-md-4 col-sm-4 jobsContentContainer"
                    key={item._id}
                  >
                    <div className="jobdeschData">
                      <Link className="link" to={`/job/${item._id}`}>
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
              </>
            ) : (
              <>
                {/* render data after search */}
                {foundJobs.map((item, id) => (
                  <div
                    className="col-md-4 col-sm-4 jobsContentContainer"
                    key={item._id}
                  >
                    <div className="jobdeschData">
                      <Link className="link" to={`/job/${item._id}`}>
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
