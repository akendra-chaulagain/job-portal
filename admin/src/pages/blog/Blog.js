import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
// import "./Allproduct.css";
import { DataGrid } from "@mui/x-data-grid";
import "./Blog.css";
import { useDispatch, useSelector } from "react-redux";

import { deleteBlog, getAllBlog } from "../../redux/apiCalls";

const Allproduct = () => {
  const dispatch = useDispatch();

  const blogs = useSelector((state) => state.blog.blogs);

  // get all blogs
  useEffect(() => {
    getAllBlog(dispatch);
  }, [dispatch]);

  // delete blog

  // delete jobs
  const handleDelete = (id) => {
    deleteBlog(id, dispatch);
  };

  // colums material ui table
  const columns = [
    // job's id
    { field: "_id", headerName: "UserId", width: 250 },

    // jobs photo
    {
      field: "img",
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

    // author
    { field: "author", headerName: "Author", width: 200 },

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
            <NavLink to={`/edit_blog/${params.row?._id}`}>
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
    <>
      <div className="allBlog">
        <Sidebar />

        <div className="allBlogContainer">
          {/* top bar create button */}
          <div className="allContainerWrapper">
            <div className="blogTitle ">
              <h3>All Blogs</h3>
            </div>
            <div className="createBlogBtn">
              <Link to="/newblog">
                <button>Add Blogs</button>
              </Link>
            </div>
          </div>

          <div className="tableContainer" style={{ height: 520, width: "96%" }}>
            <DataGrid
              rows={blogs}
              columns={columns}
              rowsPerPageOptions={[8]}
              disableSelectionOnClick
              getRowId={(r) => r._id}
              checkboxSelection
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Allproduct;
