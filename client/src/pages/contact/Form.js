import React from "react";
import "./Form.css";

const Form = () => {
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
              <form className="contact-form row">
                <div className="form-field col-lg-6">
                  {/* full name */}
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                  />
                </div>
                {/* email */}
                <div className="form-field col-lg-6 ">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                {/* contact no. */}
                <div className="form-field col-lg-6 ">
                  <input name="phone" type="text" placeholder="contact No." />
                </div>
                {/* address */}
                <div className="form-field col-lg-6 ">
                  <input name="address" type="text" placeholder="address" />
                </div>
                {/* messsage */}
                <div className="form-field col-lg-12">
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Enter your message.."
                  />
                </div>
                {/* send button */}
                <div className="submmitButton">
                  <button>Send</button>
                </div>
              </form>
            </div>
            {/* contact us data (icon) */}
            <div className="col-md-4 rightSideFormData">
              {/* location icon */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i class="fa-solid fa-location-pin"></i>
                </p>
                <h5 className="text-center">Address </h5>
                <p className="text-center">Katmandu ,Nepal ,street 32</p>
              </div>
              {/* contact us icon */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i class="fa-solid fa-phone"></i>
                </p>
                <h5 className="text-center">Contact no </h5>
                <p className="text-center">+654675476</p>
              </div>
              {/* email */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i class="fa-solid fa-envelope"></i>
                </p>
                <h5 className="text-center">our email </h5>
                <p className="text-center">companyName@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
