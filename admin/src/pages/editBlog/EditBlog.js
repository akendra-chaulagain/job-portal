import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import "./EditBlog.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const EditBlog = () => {
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
      <div className="editBlog">
        <Sidebar />

        <div className="container-fluid editBlogContainer">
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
                      <input type="text" name="title" autoComplete="off" />
                    </div>

                    {/* author name */}
                    <div className="editBlogInputField">
                      <label htmlFor="">Author</label>
                      <br />
                      <input type="text" name="year" autoComplete="off" />
                    </div>

                    {/* publish date */}
                    <div className="editBlogInputField">
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
                      <div className=" editBlogInputFieldImg mt-3">
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
                {/* publish date */}
                <div className="editBlogInputField">
                  <label htmlFor="">Description</label>
                  <div className="reactQuill">
                    <div ref={quillRef} />
                  </div>
                </div>
                {/* create btn */}
                <div className="createnewButton">
                  <div className="createButton">
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

export default EditBlog;
