import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./CategoryJobs.css";
import ReactPaginate from "react-paginate";

const CategoryJobs = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[3];
  // filter jobs according to category
  const [didMount, setDidMount] = useState(false);
  const [catData, setCatData] = useState([]);
  useEffect(() => {
    setDidMount(true);
    const getCategoryData = async () => {
      try {
        const res = await axios.get(`/jobs/allJobs/?cat=${path}`);
        setCatData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategoryData();
    return () => setDidMount(false);
  }, [path]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(catData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(catData.length / itemsPerPage));
  }, [itemOffset, catData]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % catData.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container categoryJobs">
        <div className="categoryTopTitle ">{path.toUpperCase()}</div>
        <div className="categoryTopText">
          <p>
            This list show the latest job vacancy in {`${path}`} Jobs in Poland.
            The brief job detail has job title, name of the organization, job
            location, required experiences, key skills and the deadline to
            apply. Most recent job are shown on first. Click on the job that
            interests you, read the job detail and if it is suitable for you,
            Click on the job and send you CV.
          </p>
        </div>

        <div className="row">
          {/* CSS OF category CONTAINER IS SAME AS JOSECTION FROM COMPONENT/HOMECOMPONENT  */}
          {currentItems.map((item) => (
            <div
              className="col-md-4 col-sm-4 jobsContentContainer"
              key={item._id}
            >
              <div className="jobdeschData">
                <Link className="link" to={`/job/${item.title}/${item._id}`}>
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
        </div>
      </div>
    </>
  );
};

export default CategoryJobs;
