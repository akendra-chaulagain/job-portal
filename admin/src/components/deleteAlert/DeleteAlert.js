import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { deleteBlog, deleteCategory, deleteJobs } from "../../redux/apiCalls";
import "./DeleteAlert.css";

// success tostify
const tostifySuccess = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  progress: undefined,
};



function DeleteAlert({ setShowDeleteAlert, props }) {
  const dispatch = useDispatch();
  // delete jobs
  const handleDelete = (id) => {
    if (props === "job") {
      deleteJobs(id, dispatch);
      toast.success(" Job successfully  deleted !", tostifySuccess);
    } else if (props === "job category") {
      deleteCategory(id, dispatch);
      // toast.success(" Category successfully  deleted !", tostifySuccess);
    } else if (props === "blog") {
      deleteBlog(id, dispatch);
      toast.success(" Blog successfully  deleted !", tostifySuccess);
    } else {
      alert("unable to delete");
      console.log("not deleted");
      
    }
  };

  return (
    <>
      <div className="deleteAlertContainer ">
        <span className="areYouSure">
          {`Are you sure you want to delete ${props}`}?
        </span>
        <div className="dacButton">
          <button
            className="dacYes"
            onClick={() => setShowDeleteAlert(false || handleDelete)}
          >
            Yes
          </button>
          <button className="dacYes" onClick={() => setShowDeleteAlert(false)}>
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteAlert;
