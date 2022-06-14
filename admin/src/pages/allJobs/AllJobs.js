import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./AllJobs.css";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteJobs, getAllJobs } from "../../redux/apiCalls";
import Loader from "../../components/Loader/Loader";

const AllJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.jobs);

  // loading component

  const [isLoading, setLoading] = useState(true);

  // get all jobs
  useEffect(() => {
    getAllJobs(dispatch);
    setLoading(false);
  }, [dispatch]);


  

  // delete jobs
  const handleDelete = (id) => {
    deleteJobs(id, dispatch);
  };

  // colums material ui table
  const columns = [
    // job's id
    { field: "_id", headerName: "UserId", width: 250 },

    // jobs photo
    {
      field: "jobPhoto",
      headerName: "Photo",
      width: 70,
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



    // job create date
    {
      field: "createdAt",
      headerName: "Created date",
      width: 180,
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
            <NavLink to={`/job/${params.row._id}`}>
              <button className="button_Edit">edit</button>
            </NavLink>
            {/* delete  user data button*/}
            <span>
              <button
                onClick={() => handleDelete(params.row._id)}
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
      {isLoading ? (
        <Loader />
      ) : (
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
          <div style={{ height: 520, width: "96%" }}>
            <DataGrid
              rows={jobs}
              columns={columns}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
              getRowId={(r) => r._id}
              checkboxSelection
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AllJobs;
