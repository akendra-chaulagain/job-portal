import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./NewJob.css";
import { useQuill } from "react-quilljs";

import "quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createJobs, getAllCategory } from "../../redux/apiCalls";

const NewJob = () => {
  // category
  const categoryData = useSelector((state) => state.category.categorys);
  const dispatch = useDispatch();

  // get all jobs
  useEffect(() => {
    getAllCategory(dispatch);
  }, [dispatch]);

  // react quill is used to for job desc
  const { quill, quillRef } = useQuill();
  const [desc, setDesc] = useState();

  // react quill is used for description
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setDesc(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);

  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaKey, setMetaKey] = useState("");
  const [metaDesc, setMetaDesc] = useState("");

  // create jobs
  const handleSubmitData = (e) => {
    const catData = { title, cat, desc, metaDesc, metaKey, metaTitle };
    e.preventDefault();
    createJobs(catData, dispatch);
    setTimeout(() => {
      window.location.replace("/jobs");
    }, 1500);
  };

  return (
    <>
      <div className="newJobs">
        <Sidebar />

        <div className="container-fluid newJobsContainer">
          <div className="row">
            <div className="col-md-12">
              <div className="newJobTitle text-center">
                <h3>Create New Job</h3>
              </div>

              <form className="addJobForm">
                <div className="row">
                  {/* left side */}
                  <div className="col-md-6">
                    <div className="inputField">
                      <label htmlFor="">Job Title</label>
                      <br />
                      <input
                        type="text"
                        name="title"
                        autoComplete="off"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="inputField">
                      <label htmlFor="">Category</label>
                      <br />

                      <select
                        name="cat"
                        onChange={(e) => setCat(e.target.value)}
                        required
                      >
                        {categoryData?.map((item) => (
                          <option
                            // defaultValue={item[0].title}
                            value={item.title}
                            key={item._id}
                          >
                            {item.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  {/* right side */}
                  <div className="col-md-6">
                    {/* meta data */}
                    <div className="seoMetaData mt-3">
                      {/* meta title */}
                      <h3>SEO Meta</h3>
                      <div className="inputField">
                        <label htmlFor="">Meta Title</label>
                        <br />
                        <input
                          type="text"
                          name="metaTitle"
                          autoComplete="off"
                          onChange={(e) => setMetaTitle(e.target.value)}
                          required
                        />
                      </div>
                      {/* meta keywords */}
                      <div className="inputField">
                        <label htmlFor="">Meta KeyWords</label>
                        <br />
                        <input
                          type="text"
                          name="metaKey"
                          autoComplete="off"
                          onChange={(e) => setMetaKey(e.target.value)}
                          required
                        />
                      </div>
                      {/* meta desc */}
                      <div className="inputField">
                        <label htmlFor="">Meta Description</label>
                        <br />
                        <input
                          type="text"
                          name="metadesc"
                          autoComplete="off"
                          onChange={(e) => setMetaDesc(e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* job desc */}
                  <div className="inputField">
                    <label htmlFor="">Description</label>
                    <div className="reactQuill">
                      <div
                        name="desc"
                        onChange={(e) => setDesc(e.target.value)}
                        ref={quillRef}
                        required
                      />
                      {/* create btn */}
                      <div className="createnewJobButton">
                        <button onClick={handleSubmitData}>Create</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewJob;
