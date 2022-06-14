import React from "react";
import "./Footer.css";
import Iframe from "react-iframe";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer">
        <div className="row">
          <h3 className="text-center mt-3">Company name</h3>
          <div className="containerBox">
            <div className="  firstContainer">
              <span>Home</span>
              <br />
              <span>Contact Us</span>
              <br />
              <span>About Us</span>
              <br />
              <span>Privacy Policy</span>
              <br />
            </div>
            {/* middle */}
            <div className="  middleContainer">
              <span>FAQ</span>
              <br />
              <span>Live</span>
              <br />
              <span>Permium</span>
              <br />
              <span>Privacy policy</span>
              <br />
            </div>
            {/* right */}
            {/* <div className="  rightContainer">
              <Iframe
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112193.7295053367!2d81.03538993190979!3d28.50802159507804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a20c3137c6209b%3A0xef662ab7d48804c8!2sTikapur%2010901!5e0!3m2!1sen!2snp!4v1634988707924!5m2!1sen!2snp"
                allowfullscreen=""
                loading="lazy"
              />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
