import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./CreateCategory.css";

const CreateCategory = () => {
  return (
    <>
      <div className="createCategory">
        <Sidebar />
        <div className="createCategoryContainer">
          <div className="row">
            <div className="col-md-12">
              <div className="createCategoryTitle text-center">
                <h3>Create Category</h3>
              </div>

              <form className="addJobForm">
                <div className="row">
                  {/* left side */}
                  <div className="col-md-6">
                    <div className="createCategoryField">
                      <label>Category</label>
                      <br />
                      <input type="text" name="title" autoComplete="off" />
                    </div>

                    {/* publish date */}
                    <div className="createCategoryField">
                      <label>Publish Date</label>
                      <br />
                      <input type="date" name="year" autoComplete="off" />
                    </div>
                  </div>
                </div>
                {/* create btn */}
                <div className="createCategoryButton">
                  <button>Create</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
