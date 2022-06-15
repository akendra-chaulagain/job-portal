import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./AddBlog.css";
import { useQuill } from "react-quilljs";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import "quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import { createBlog } from "../../redux/apiCalls";

const AddBlog = () => {
  // preview profile iamges before uploading
  const [image, setImage] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
  };
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

  const dispatch = useDispatch();
  const [progress, setProgress] = useState();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

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
          const blogData = {
            img: downloadURL,
            title,
            author,
            desc,
          };
          createBlog(blogData, dispatch);
        });
      }
    );
  };

  return (
    <>
      <div className="newBlog">
        <Sidebar />

        <div className="container-fluid newBlogContainer">
          <div className="row">
            <div className="col-md-12">
              <div className="newBlogTitle text-center">
                <h3>Create New Blog</h3>
              </div>

              <form className="addJobForm">
                <div className="row">
                  {/* left side */}
                  <div className="col-md-6 leftSideBlog">
                    {/* title */}
                    <div className="blogInputField">
                      <label htmlFor="">Title</label>
                      <br />
                      <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        name="title"
                        autoComplete="off"
                      />
                    </div>

                    {/* author name */}
                    <div className="blogInputField">
                      <label htmlFor="">Author</label>
                      <br />
                      <input
                        type="text"
                        onChange={(e) => setAuthor(e.target.value)}
                        name="author"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  {/* right side */}
                  <div className="col-md-6">
                    {/* Thumbnail photo */}
                    {/* show select  img if user select the image  from the device*/}
                    {image ? (
                      <>
                        <div className="blogInputFieldImgAndButton">
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
                      <div className=" blogInputFieldImg mt-3">
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
                </div>
                {/* desc */}
                <div className="blogInputField">
                  <label htmlFor="">Description</label>
                  {/* react quill */}
                  <div className="reactQuill">
                    <div
                      name="desc"
                      onChange={(e) => setDesc(e.target.value)}
                      ref={quillRef}
                    />
                  </div>
                  {/* create btn */}
                  <div className="createnewBlogButton">
                    <button onClick={handleSubmitData}>Create</button>
                    {progress}
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

export default AddBlog;
