import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./NewJob.css";

const NewJob = () => {
  // preview profile iamges before uploading
  const [image, setImage] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
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
                      {/* Thumbnail photo */}
                      {/* show select  img if user select the image  from the device*/}
                      {image ? (
                        <>
                          <div className="newJobInputFieldImgAndButton">
                            <img src={image} alt="" />
                            <label htmlFor="files">
                              <p>Thumbnail image</p>
                              <input
                                type="file"
                                id="files"
                                style={{ display: "none" }}
                                name="coverPic"
                                onChange={onImageChange}
                              />
                            </label>
                          </div>
                        </>
                      ) : (
                        <div className=" newJobInputFieldImg mt-3">
                          <label htmlFor="files">
                            Thumbnail Image
                            <br />
                            <p>Thumbnail image</p>
                            <input
                              type="file"
                              id="files"
                              style={{ display: "none" }}
                              name="coverPic"
                              onChange={onImageChange}
                            />
                          </label>
                        </div>
                      )}
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
