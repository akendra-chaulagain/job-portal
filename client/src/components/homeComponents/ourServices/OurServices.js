import React from "react";
import "./OurServices.css";

const OurServices = () => {
  return (
    <>
      <div className="container homeOurservices">
        <div className="ourServicesTop text-center">
          <p>We are always ready for You</p>
        </div>
        <div className="row">
          {/* left side container */}
          <div className="col-md-6 text-center homeOurServiceLeft">
            <h3 className=" text-center">Lorem, ipsum.</h3>
            <p className=" text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aliquid corrupti magnam est illum nesciunt temporibus
              ullam tempore pariatur asperiores laborum, eligendi sit eum? Optio
              enim deserunt ex aliquam non, voluptate vero reiciendis, nisi
              libero repudiandae blanditiis esse officiis recusandae atque iure
              voluptatum, quibusdam provident beatae. Nam sint officia
              excepturi?
            </p>
          </div>
          {/* right side container */}
          <div className="col-md-6 homeOurServiceRight">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default OurServices;
