import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditJobs.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

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

  // react quill
  const { quill, quillRef } = useQuill();
  const [quillValue, setQuillValue] = useState();

  // react quill is used for description
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        setQuillValue(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);
  return (
    <>
      <div className="editJobs">
        <Sidebar />

        <div className="container-fluid editJobsContainer">
          <div className="row">
            <div className="col-md-12">
              <div className="editJobTitle text-center">Edit Job</div>

              <form className="addJobForm">
                <div className="row">
                  {/* left side */}
                  <div className="col-md-6">
                    <div className="editJobsInputField">
                      <label htmlFor="">Job Title</label>
                      <br />
                      <input type="text" name="title" autoComplete="off" />
                    </div>

                    {/* publish date */}
                    <div className="editJobsInputField">
                      <label htmlFor="">Publish Date</label>
                      <br />
                      <input type="date" name="year" autoComplete="off" />
                    </div>

                    <div className="editJobsInputField">
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
                          <div className="editJobInputFieldImgAndButton">
                            <img src={image} alt="" />
                            <label htmlFor="files">
                              <p>Job Thumbnail </p>
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
                        <div className=" editJobsInputFieldImg mt-3">
                          <label htmlFor="files">
                            Job Thumbnail
                            <br />
                            <p>Job Thumbnail</p>
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
                  </div>
                </div>
                {/* job desc */}
                <div className="editJobsInputField">
                  <label htmlFor="">Description</label>
                  <div className="reactQuill">
                    <div ref={quillRef} />
                  </div>
                </div>
                {/* create btn */}
                <div className="editJobButton">
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

export default NewJob;
