import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";
import { createCategory } from "../../redux/apiCalls";
import "./CreateCategory.css";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  // create category
  const handleSubmitData = (e) => {
    const catData = { title, date };
    e.preventDefault();
    createCategory(catData, dispatch);
    naviget("/category");
  };

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
                      <input
                        type="text"
                        onChange={(e) =>
                          setTitle(
                            e.target.value.charAt(0).toUpperCase() +
                              e.target.value.slice(1)
                          )
                        }
                        name="title"
                        autoComplete="off"
                      />
                    </div>

                    {/* publish date */}
                    <div className="createCategoryField">
                      <label>Publish Date</label>
                      <br />
                      <input
                        type="date"
                        onChange={(e) => setDate(e.target.value)}
                        name="name"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                {/* create btn */}
                <div className="createCategoryButton">
                  <button onClick={handleSubmitData}>Create</button>
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
