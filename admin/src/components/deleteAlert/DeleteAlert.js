import React from "react";
import { useDispatch } from "react-redux";
import { deleteBlog, deleteCategory, deleteJobs } from "../../redux/apiCalls";
import "./DeleteAlert.css";

function DeleteAlert({ setShowDeleteAlert, props }) {
  const dispatch = useDispatch();
  // delete jobs
  const handleDelete = (id) => {
    if (props === "job") {
      deleteJobs(id, dispatch);
    } else if (props === "job category") {
      deleteCategory(id, dispatch);
    } else if (props === "blog") {
      deleteBlog(id, dispatch);
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
