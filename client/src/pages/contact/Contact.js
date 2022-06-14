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
      <div className=" container contact">
        <div className="row">
          <div className="col-md-12">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56096.85759164457!2d81.07041065789676!3d28.50803506142142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20c3137c6209b%3A0xef662ab7d48804c8!2sTikapur%2010901!5e0!3m2!1sen!2snp!4v1655166324678!5m2!1sen!2snp"
              width="100%"
              height="450"
            ></Iframe>
          </div>
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Contact;
