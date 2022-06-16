import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import "./AllCategory.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/apiCalls";
import Loader from "../../components/Loader/Loader";
import DeleteAlert from "../../components/deleteAlert/DeleteAlert";

const AllCategory = () => {
  const category = "job category";
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.categorys);
  //Open Close delete alert
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  const [isLoading, setLoading] = useState(true);
  // get all jobs
  useEffect(() => {
    setLoading(true);
    getAllCategory(dispatch);
    setLoading(false);
  }, [dispatch]);

  const columns = [
    // id
    { field: "_id", headerName: "ID", width: 350 },
    // job's category title
    { field: "title", headerName: "Title", width: 260 },

    // publish date
    { field: "date", headerName: "Publish date", width: 200 },

    // action
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
          <>
            {/* view data button*/}
            <NavLink to={`/edit_cat/${params.row._id}`}>
              <button className="categoryEdit_button">edit</button>
            </NavLink>
            {/* delete  user data button*/}
            <span>
              <button
                // onClick={() => handleDelete(params.row._id)}
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
    <>
      <div className=" category">
        {/* side bar is imnported from side bar container
         */}
        <Sidebar />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="categoryContainer">
            <div className="categoryTopBar ">
              <h3>All Category</h3>
              {/* create job button */}
              <div className="createCategoryBtn">
                <NavLink className="link" to="/create_cat">
                  <button>Add category</button>
                </NavLink>
              </div>
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div
                className="tableContainer"
                style={{ height: 520, width: "96%" }}
              >
              {/* show popoup whwn delete button is clicked */}
                {showDeleteAlert && (
                  <DeleteAlert
                    setShowDeleteAlert={setShowDeleteAlert}
                    id={showDeleteAlert}
                    props={category}
                  />
                )}

                <DataGrid
                  rows={categoryData}
                  columns={columns}
                  rowsPerPageOptions={[8]}
                  disableSelectionOnClick
                  getRowId={(r) => r._id}
                  checkboxSelection
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AllCategory;
