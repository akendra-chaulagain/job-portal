import React from "react";
import "./Employers.css";

const Employers = () => {
  return (
    <>
      <div className="container employers">
        {/* <div className="ourServicesTop text-center">
          <p>We are always ready for You</p>
        </div> */}
        <div className="row">
          {/* left side container */}
          <div className="col-md-6 employersLeft">
            <img
              className="img-fluid"
              src="https://images.pexels.com/photos/1181401/pexels-photo-1181401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          {/* right side container */}
          <div className="col-md-6 employersRight">
            <h3 className="text-center">Lorem, ipsum.</h3>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, aliquid corrupti magnam est illum nesciunt temporibus
              ullam tempore pariatur asperiores laborum, eligendi sit eum? Optio
              enim deserunt ex aliquam non, voluptate vero reiciendis, nisi
              libero repudiandae blanditiis esse officiis recusandae atque iure
              voluptatum, quibusdam provident beatae. Nam sint officia
              excepturi?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employers;
