import React, { useRef } from "react";
// import { useState } from "react";
import "./JobApplication.css";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const JobApplication = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bjbw9gz",
        "template_d44haf1",
        form.current,
        "rHEVolQUUNXIllkPh"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("messange send");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
            <form action="" ref={form}>
              {/* full name */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Full Name</label>
                <input name="name" type="text" required />
              </div>
              {/* phone  */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Contact </label>
                <input name="contact" type="number" required />
              </div>

              {/* email */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Email </label>
                <input name="email" className="pl-3" type="email" required />
              </div>

              {/* message */}
              <div className="jobApplicationFormInputs">
                <label htmlFor="">Message</label>
                <textarea name="message" type="text" required />
              </div>
              {/* position */}
              <div className="jobApplicationFormInputs  ">
                <label htmlFor="">Job's Position</label>
                <input
                  type="text"
                  defaultValue={path}
                  placeholder="job's position"
                  required
                  name="position"
                />
              </div>
              {/* CV */}
              <div className="jobApplicationFormInputsCV">
                <label htmlFor="file">CV</label>
                <br />
                <input type="file" id="file" name="img" />
              </div>
              {/* submit button */}
              <div className="cvSubmitForm">
                <button type="submmit" onClick={sendEmail}>
                  SUBMIT FORM
                </button>
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
