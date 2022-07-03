import React, { useEffect, useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";
import { useDispatch, useSelector } from "react-redux";
import { getUserAdmin } from "../../redux/apiCalls";

const Form = () => {
  // get user
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    getUserAdmin(dispatch);
  }, [dispatch]);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wg0txsc",
        "template_mmafpb9",
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
      <div className="form">
        {/* contact us text */}
        <h3 className="text-center">Contact us</h3>
        <div className="container">
          <div className="row">
            {/* left side container */}
            <div className="col-md-8 mb-5">
              {/* contact us form */}
              <form className="contact-form row" ref={form}>
                <div className="form-field col-lg-6">
                  {/* full name */}
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name*"
                  />
                </div>
                {/* email */}
                <div className="form-field col-lg-6 ">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email*"
                  />
                </div>
                {/* subject */}
                <div className="form-field col-lg-12 ">
                  <input name="subject" type="text" placeholder="Subject*" />
                </div>
                {/* messsage */}
                <div className="form-field col-lg-12">
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Enter your message*"
                  />
                </div>
                {/* submmit button */}
                <div className="submmitButton">
                  <button type="submmit" onClick={sendEmail}>
                    Send
                  </button>
                </div>
              </form>
            </div>
            {/* contact us data (icon) */}
            {/* location icon */}
            {user.map((item) => (
              <div className="col-md-4 rightSideFormData" key={item._id}>
                <div className="contactUsIconItem">
                  <p className="text-center">
                    <i className="fa-solid fa-location-pin"></i>
                  </p>
                  <h5 className="text-center">Address </h5>
                  <h6 className="text-center">{item.address}</h6>
                </div>
                {/* contact us icon */}
                <div className="contactUsIconItem">
                  <p className="text-center">
                    <i className="fa-solid fa-phone"></i>
                  </p>
                  <h5 className="text-center">Contact no </h5>
                  <h6 className="text-center">{item.contact}</h6>
                </div>
                {/* email */}
                <div className="contactUsIconItem">
                  <p className="text-center">
                    <i className="fa-solid fa-envelope"></i>
                  </p>
                  <h5 className="text-center">our email </h5>
                  <h6 className="text-center">{item.contactEmail}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
