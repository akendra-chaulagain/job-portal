import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./AddBlog.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

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
                      <input type="text" name="title" autoComplete="off" />
                    </div>

                    {/* author name */}
                    <div className="blogInputField">
                      <label htmlFor="">Author</label>
                      <br />
                      <input type="text" name="year" autoComplete="off" />
                    </div>

                    {/* publish date */}
                    <div className="blogInputField">
                      <label htmlFor="">Publish Date</label>
                      <br />
                      <input type="date" name="genre" autoComplete="off" />
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
                    <div ref={quillRef} />
                  </div>
                  {/* create btn */}
                  <div className="createnewBlogButton">
                    <button>Create</button>
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
