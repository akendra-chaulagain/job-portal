import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditBlog.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { useLocation } from "react-router-dom";
import app from "../../firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateBlog } from "../../redux/apiCalls";
import Loader from "../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const EditBlog = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  // get user by id
  const [isLoading, setLoading] = useState(true);
  const [didMount, setDidMount] = useState(false);
  const [blogData, setBlogData] = useState({});
  useEffect(() => {
    setLoading(true);
    setDidMount(true);
    const getDataById = async () => {
      try {
        const res = await axios.get("/blog/find/" + path);
        setBlogData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataById();
    setLoading(false);
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

  // react quill for description
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
  const [title, setTitle] = useState(blogData.title);
  const [author, setAuthor] = useState(blogData.author);
  const [metaTitle, setMetaTitle] = useState(blogData.metaTitle);
  const [metaKey, setMetaKey] = useState(blogData.metaKey);
  const [metaDesc, setMetaDesc] = useState(blogData.metaDesc);

  // firebase is used to store images and videos in email id
  const handleSubmitData = (e) => {
    e.preventDefault();
    if (selectImagesProfile) {
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
              metaDesc,
              metaKey,
              metaTitle,
            };
            updateBlog(path, blogData, dispatch);
            navigate("/blog");
          });
        }
      );
    } else {
      const blogData = {
        title,
        author,
        desc,
        metaDesc,
        metaKey,
        metaTitle,
      };
      updateBlog(path, blogData, dispatch);
      navigate("/blog");
    }
  };
  return (
    <>
      <div className="editBlog">
        <Sidebar />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="container-fluid editBlogContainer">
            {progress ? (
              <Loader />
            ) : (
              <div className="row">
                <div className="col-md-12">
                  <div className="editBlogTitle text-center">Edit Blog</div>

                  <form className="addJobForm">
                    <div className="row">
                      {/* left side */}
                      <div className="col-md-6 leftSideBlog">
                        {/* title */}
                        <div className="editBlogInputField">
                          <label htmlFor="">Title</label>
                          <br />
                          <input
                            type="text"
                            defaultValue={blogData.title}
                            name="title"
                            autoComplete="off"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>

                        {/* author name */}
                        <div className="editBlogInputField">
                          <label htmlFor="">Author</label>
                          <br />
                          <input
                            type="text"
                            defaultValue={blogData.author}
                            name="year"
                            autoComplete="off"
                            onChange={(e) => setAuthor(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* right side */}
                      <div className="col-md-6">
                        {/* Thumbnail photo */}
                        {/* show select  img if user select the image  from the device*/}
                        {image ? (
                          <>
                            <div className="editBlogInputFieldImgAndButton">
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
                          <div className="editBlogInputFieldImgAndButton">
                            <img src={blogData.img} alt="blog_img" />
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
                        )}
                      </div>

                      <div className="col-md-8">
                        {/* meta data */}
                        <div className="newBlogseoMetaData mt-3">
                          {/* meta title */}
                          <h3>SEO Meta</h3>
                          <div className="metaDatainputField">
                            <label htmlFor="">Meta Title</label>
                            <br />
                            <input
                              type="text"
                              name="metaTitle"
                              defaultValue={blogData.metaTitle}
                              autoComplete="off"
                              onChange={(e) => setMetaTitle(e.target.value)}
                            />
                          </div>
                          {/* meta keywords */}
                          <div className="metaDatainputField">
                            <label htmlFor="">Meta KeyWords</label>
                            <br />
                            <input
                              type="text"
                              name="metaKey"
                              defaultValue={blogData.metaKey}
                              autoComplete="off"
                              onChange={(e) => setMetaKey(e.target.value)}
                            />
                          </div>
                          {/* meta desc */}
                          <div className="metaDatainputField">
                            <label htmlFor="">Meta Description</label>
                            <br />
                            <input
                              type="text"
                              name="metadesc"
                              defaultValue={blogData.metaDesc}
                              autoComplete="off"
                              onChange={(e) => setMetaDesc(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* publish date */}
                    <div className="editBlogInputField">
                      <label htmlFor="">Description</label>
                      <div className="reactQuill">
                        <div
                          name="desc"
                          onChange={(e) => setDesc(e.target.value)}
                          ref={quillRef}
                        />
                        {/* create btn */}
                        <div className="editBlogButton">
                          <button onClick={handleSubmitData}>Create</button>
                          {progress}
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default EditBlog;
