import React, { useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./Core.css";
import CoreWidget from "../../../components/coreWidget/CoreWidget";

const Core = () => {
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
    <div className="core">
      <Sidebar />
      <div className="container coreContainer">
        <div className="row">
          <div className="col-3 coreLeft">
            {/* left side  */}
            <CoreWidget />
          </div>

          <div className="col-md-9 coreRight">
            {/* company logo */}
            <div className="text-center companyLogo">
              {/* company logo */}
              {/* show select  img if user select the image  from the device*/}
              {image ? (
                <>
                  <div className="uploadLogoBtn">
                    <img src={image} alt="" />
                    <label htmlFor="files">
                      <p>Select Logo</p>
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
                <div className=" uploadLogoBtnImg mt-3">
                  <label htmlFor="files">
                    Upload Logo
                    <br />
                    <p>Upload Logo</p>
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
            {/* input filed */}
            <form action="" className="coreFields">
              {/* input fields */}
              <div className="coreInputField">
                {/* brandname */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Brand Name</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
                {/* brand acronym */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Brand Acronym</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
              </div>
              {/* description */}
              <div className="coreInputField">
                <div className="coreInputFieldItem">
                  <label htmlFor="">Description</label>
                  <br />
                  <textarea type="text" name="title" autoComplete="off" />
                </div>
              </div>

              {/* contact details */}
              <div className="contactDetails">
                <p>Contact Details</p>
              </div>
              <div className="coreInputField">
                <br />
                {/* brandname */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Email</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
                {/* brand acronym */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Contact Number</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
              </div>
              {/* social information */}
              <div className="socialDetails">
                <p>Social Information</p>
              </div>
              <div className="coreInputField">
                <br />
                {/* brandname */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Facebook</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
                {/* brand acronym */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Twitter</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
              </div>
              <div className="coreInputField">
                <br />
                {/* brandname */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Instagram</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
                {/* brand acronym */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Linkedin</label>
                  <br />
                  <input type="text" name="title" autoComplete="off" />
                </div>
              </div>
              {/* save button */}
              <div className="seveButton">
                <button>save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
