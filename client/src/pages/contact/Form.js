import React, { useRef } from "react";
import "./Form.css";
import emailjs from "@emailjs/browser";

const Form = () => {
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
                  <input
                    nameName="subject"
                    type="text"
                    placeholder="Subject*"
                  />
                </div>
                {/* messsage */}
                <div className="form-field col-lg-12">
                  <textarea
                    nameName="message"
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
            <div className="col-md-4 rightSideFormData">
              {/* location icon */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i className="fa-solid fa-location-pin"></i>
                </p>
                <h5 className="text-center">Address </h5>
                <h6 className="text-center">Katmandu ,Nepal ,street 32</h6>
              </div>
              {/* contact us icon */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i className="fa-solid fa-phone"></i>
                </p>
                <h5 className="text-center">Contact no </h5>
                <h6 className="text-center">+654675476</h6>
              </div>
              {/* email */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i className="fa-solid fa-envelope"></i>
                </p>
                <h5 className="text-center">our email </h5>
                <h6 className="text-center">companyName@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

// import React, { useState } from "react";
// import "./Form.css";
// import { send } from "emailjs-com";

// const Form = () => {
//   const [toSend, setToSend] = useState({
//     from_name: "",
//     to_name: "",
//     message: "",
//     reply_to: "",
//   });
//   const onSubmit = (e) => {
//     e.preventDefault();
//     send(
//       "UeuUakuSlHzGGXajnRMgx",
//       "template_798dm2t",
//       toSend,
//       "byQ7c_hjwBEKRH7FE"
//     )
//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//       })
//       .catch((err) => {
//         console.log("FAILED...", err);
//       });
//   };

//   const handleChange = (e) => {
//     setToSend({ ...toSend, [e.target.name]: e.target.value });
//   };
//   return (
//     <>
//       <form style={{ marginTop: 20 }} onSubmit={onSubmit}>
//         <input
//           type="text"
//           name="from_name"
//           placeholder="from name"
//           value={toSend.from_name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="to_name"
//           placeholder="to name"
//           value={toSend.to_name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="message"
//           placeholder="Your message"
//           value={toSend.message}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="reply_to"
//           placeholder="Your email"
//           value={toSend.reply_to}
//           onChange={handleChange}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Form;
