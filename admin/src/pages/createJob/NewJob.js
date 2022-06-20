import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./NewJob.css";
import { useQuill } from "react-quilljs";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import "quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { createJobs, getAllCategory } from "../../redux/apiCalls";
import Loader from "../../components/Loader/Loader";

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

  const [progress, setProgress] = useState();
  const [title, setTitle] = useState("");
  const [cat, setCat] = useState("");

  // preview profile iamges before uploading

  const [image, setImage] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
  };

  // firebase is used to store images and videos in email id
  const handleSubmitData = (e) => {
    e.preventDefault();
    const storage = getStorage(app);
    const storageRef = ref(storage, selectImagesProfile.name);
    const uploadTask = uploadBytesResumable(storageRef, selectImagesProfile);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            setProgress("");
            break;
          case "running":
            setProgress("Completed");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const jobs = {
            img: downloadURL,
            title,
            cat,
            desc,
          };
          createJobs(jobs, dispatch);
          setTimeout(() => {
            window.location.reload("/jobs");
          }, 2000);
        });
      }
    );
  };

  return (
    <>
      <div className="newJobs">
        <Sidebar />
        {progress ? (
          <Loader />
        ) : (
          <>
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
                          />
                        </div>

                        <div className="inputField">
                          <label htmlFor="">Category</label>
                          <br />

                          <select
                            onChange={(e) => setCat(e.target.value)}
                            name="cat"
                          >
                            {categoryData?.map((item) => (
                              <option value={item.title} key={item._id}>
                                {item.title}
                              </option>
                            ))}
                          </select>
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
                                    name="img"
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
                                  name="img"
                                  onChange={onImageChange}
                                />
                              </label>
                            </div>
                          )}
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
          </>
        )}
      </div>
    </>
  );
};

export default NewJob;
