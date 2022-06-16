import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./AllJobs.css";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllJobs } from "../../redux/apiCalls";
import Loader from "../../components/Loader/Loader";
import DeleteAlert from "../../components/deleteAlert/DeleteAlert";

const AllJobs = () => {
  const job = "job";
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs?.jobs);

  //Open Close delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  // loading component
  const [isLoading, setLoading] = useState(true);
  
  // get all jobs
  useEffect(() => {
    setLoading(true);
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);

  // colums material ui table
  const columns = [
    // job's id
    { field: "_id", headerName: "UserId", width: 220 },

    // jobs photo
    {
      field: "jobPhoto",
      headerName: "Photo",
      width: 65,
      renderCell: (params) => {
        return (
          <>
            {/* user image */}
            <div className="userImg">
              <img src={params.row.img} alt="job_img" />
            </div>
          </>
        );
      },
    },
    // jobs title
    { field: "title", headerName: "Title", width: 200 },

    // job category
    { field: "cat", headerName: "Category", width: 200 },

    // job create date
    {
      field: "createdAt",
      headerName: "Created date",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            {/* user image */}
            <div className="userImg">
              <span>{new Date(params.row.createdAt).toDateString()}</span>
            </div>
          </>
        );
      },
    },

    // job action
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            {/* view data button*/}
            <NavLink to={`/job/${params.row?._id}`}>
              <button className="button_Edit">edit</button>
            </NavLink>
            {/* delete  user data button*/}
            <span>
              <button
                onClick={() =>
                  setShowDeleteAlert(!showDeleteAlert) ||
                  setShowDeleteAlert(params.row._id)
                }
                className="button_delete"
              >
                delete
              </button>
            </span>
          </>
        );
      },
    },
  ];

  return (
    <div className=" jobs">
      {/* side bar is imnported from side bar container
       */}
      <Sidebar />

      <div className="jobContainer">
        <div className="JobTopBar ">
          <h3>All Jobs</h3>
          {/* create job button */}
          <div className="createJobBtn">
            <NavLink className="link" to="/createjobs">
              <button>Add Jobs</button>
            </NavLink>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="tableContainer" style={{ height: 520, width: "96%" }}>
            {/* show popoup whwn delete button is clicked */}
            {showDeleteAlert && (
              <DeleteAlert
                setShowDeleteAlert={setShowDeleteAlert}
                id={showDeleteAlert}
                props={job}
              />
            )}
            <DataGrid
              rows={jobs}
              columns={columns}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
              getRowId={(r) => r?._id}
              checkboxSelection
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllJobs;
