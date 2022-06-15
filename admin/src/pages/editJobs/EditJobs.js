import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditJobs.css";
import { useQuill } from "react-quilljs";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import "quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProducts } from "../../redux/apiCalls";

const NewJob = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // get user by id
  const [didMount, setDidMount] = useState(false);
  const [jobData, setJobData] = useState({});
  useEffect(() => {
    setDidMount(true);
    const getDataById = async () => {
      try {
        const res = await axios.get("/jobs/find/" + path);
        setJobData(res.data);
      } catch (error) {}
    };
    getDataById();
    return () => setDidMount(false);
  }, [path]);

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
  const [desc, setDesc] = useState(jobData.desc);

  // react quill is used for description
  React.useEffect(() => {
    if (quill) {
      quill.on("text-change", (delta, oldDelta, source) => {
        setDesc(quillRef.current.firstChild.innerHTML);
      });
    }
  }, [quill, quillRef]);

  const dispatch = useDispatch();
  const [progress, setProgress] = useState();
  const [title, setTitle] = useState(jobData.title);
  const [cat, setCat] = useState(jobData.cat);

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
        const progress = "Processing..";
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            setProgress(progress);
            break;
          case "running":
            setProgress(progress);
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
          updateProducts(path, jobs, dispatch);
        });
      }
    );
  };

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
                      {/* title */}
                      <label htmlFor="">Job Title</label>
                      <br />
                      <input
                        type="text"
                        name="title"
                        defaultValue={jobData.title}
                        autoComplete="off"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    <div className="editJobsInputField">
                      <label htmlFor="">Category</label>
                      <br />
                      <input
                        type="text"
                        defaultValue={jobData.cat}
                        name="genre"
                        autoComplete="off"
                        onChange={(e) => setCat(e.target.value)}
                      />
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
                        <div className=" editJobInputFieldImgAndButton mt-3">
                          <img src={jobData.img} alt="job_img" />
                          <label htmlFor="files">
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
                    <div
                      name="desc"
                      onChange={(e) => setDesc(e.target.value)}
                      ref={quillRef}
                    />
                  </div>
                </div>
                {/* create btn */}
                <div className="editJobButton">
                  <button onClick={handleSubmitData}>Create</button>
                  {progress}
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
