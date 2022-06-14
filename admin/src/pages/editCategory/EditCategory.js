import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditCategory.css";

const EditCategory = () => {
  return (
    <div className="editCategory">
      <Sidebar />
      <div className="editCategoryContainer">
        <div className="row">
          <div className="col-md-12">
            <div className="editCategoryTitle text-center">
              <h3>Edit Category</h3>
            </div>

            <form className="addJobForm">
              <div className="row">
                {/* left side */}
                <div className="col-md-6">
                  <div className="editCategoryField">
                    <label>Category</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>

                  {/* publish date */}
                  <div className="editCategoryField">
                    <label>Publish Date</label>
                    <br />
                    <input type="date" name="year" autoComplete="off" />
                  </div>
                </div>
              </div>
              {/* create btn */}
              <div className="editCategoryButton">
                <button>Create</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
