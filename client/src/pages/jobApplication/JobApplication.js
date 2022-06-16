import React from "react";
import { useState } from "react";
import "./JobApplication.css";
import Footer from "../../components/footer/Footer";

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
                <input type="text" placeholder="Full Name" />
              </div>
              {/* phone  and  email*/}
              <div className="jobApplicationPhoneandEmail">
                {/* phone */}
                <input type="number" placeholder="Phone" />
                {/* email */}
                <input className="pl-3" type="email" placeholder="Email" />
              </div>

              {/* message */}
              <div className="jobApplicationFormInputs">
                <textarea type="text" placeholder="Message..." />
              </div>
              {/* date */}
              <div className="jobApplicationFormInputs ">
                <input type="date" />
              </div>
              {/* time */}
              <div className="jobApplicationFormInputs">
                <input type="time" />
              </div>
              {/* CV */}
              <div className="jobApplicationCV">
                {image ? (
                  <img src={image} alt="select_img" />
                ) : (
                  <>
                    <label htmlFor="file">
                      <p>Drag & Drop Files Here</p>
                      <input
                        type="file"
                        id="file"
                        name="img"
                        style={{ display: "none" }}
                        onChange={onImageChange}
                      />
                    </label>
                  </>
                )}
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
