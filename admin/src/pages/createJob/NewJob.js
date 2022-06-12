import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./NewJob.css";

const NewJob = () => {
  return (
    <>
      <div className="newJobs">
        <Sidebar />

        <div className="container-fluid newJobsContainer">
          <div className="row">
            <div className="col-md-12">
              <div className="newJobTitle text-center">Create New Jobs</div>

              <form className="addJobForm">
                <div className="row">
                  {/* left side */}
                  <div className="col-md-6">
                    <div className="inputField">
                      <label htmlFor="">Job Title</label>
                      <br />
                      <input type="text" name="title" autoComplete="off" />
                    </div>

                    {/* publish date */}
                    <div className="inputField">
                      <label htmlFor="">Publish Date</label>
                      <br />
                      <input type="date" name="year" autoComplete="off" />
                    </div>
                    {/* job desc */}
                    <div className="inputField">
                      <label htmlFor="">Description</label>
                      <br />
                      <input type="text" name="desc" autoComplete="off" />
                    </div>

                    <div className="inputField">
                      <label htmlFor="">Category</label>
                      <br />
                      <input type="text" name="genre" autoComplete="off" />
                    </div>
                  </div>
                  {/* right side */}
                  <div className="col-md-6">
                    {/* job photo */}
                    <div className="mt-3">
                      <label htmlFor="">Job Photo</label>
                      <br />
                      <input type="file" id="img" name="img" />
                    </div>


                    {/* create btn */}
                    <div className="createnewButton">
                      {/* <button  onClick={handleSubmit} >Create</button> */}

                      <div className="createButton">
                        <button>Create</button>
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
