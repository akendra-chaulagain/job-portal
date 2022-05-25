import React from "react";
import "./Contact.css";
import Iframe from "react-iframe";
import Form from "./Form";
import Footer from "../../components/footer/Footer";

const Contact = () => {
  return (
    <>
      {/* Form */}
      <Form />
      <div className="contact">
        <div className="container">
          <div className="row">
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-md-12 mt-5">
                  <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112193.7295053367!2d81.03538993190979!3d28.50802159507804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20c3137c6209b%3A0xef662ab7d48804c8!2sTikapur%2010901!5e0!3m2!1sen!2snp!4v1634988707924!5m2!1sen!2snp"
                    allowfullscreen=""
                    width="100%"
                    height="400px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Contact;
