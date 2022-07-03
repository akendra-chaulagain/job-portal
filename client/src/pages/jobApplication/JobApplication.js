import React from "react";
import { useState } from "react";
import "./JobApplication.css";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";

const JobApplication = () => {
  // preview profile iamges before uploading
  const [image, setImage] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
  };
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <>
      <div className="container jobApplication">
        <div className="row">
          {/* jobs application */}
          <div className=" jobApplicationTop">
            <h3 className="text-center">JOB APPLICATION</h3>
          </div>
          {/* job application form */}
          <div className="jobApplicatioForm">
            <div className="jobApplicationTitle text-center">
              <p>Job application form</p>
            </div>
            <form action="">
              {/* full name */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Full Name</label>
                <input type="text" required />
              </div>
              {/* phone  */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Contact </label>
                <input type="number" required />
              </div>

              {/* email */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Email </label>
                <input className="pl-3" type="email" required />
              </div>

              {/* message */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Message</label>
                <textarea type="text" required />
              </div>
              {/* position */}
              <div className="jobApplicationFormInputs  ">
                <label htmlFor="">Job's Position</label>
                <input
                  type="text"
                  defaultValue={path}
                  placeholder="job's position"
                  required
                />
              </div>
              {/* CV */}
              <div className="jobApplicationFormInputsCV">
                <label htmlFor="file">CV</label>
                <br />
                <input
                  type="file"
                  id="file"
                  name="img"
                  onChange={onImageChange}
                  required
                />
              </div>
              {/* submit button */}
              <div className="cvSubmitForm">
                <button>SUBMIT FORM</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default JobApplication;
