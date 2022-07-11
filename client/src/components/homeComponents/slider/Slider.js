import React from "react";
import "./Slider.css";
import { NavLink } from "react-router-dom";

const Slider = () => {
  return (
    <>
      <div className=" slider__area">
        <div className="container">
          <div className="slider-active sliderWrapper">
            <div className="single-slider slider__height d-flex align-items-center">
              <div className="slider__shape"></div>
              <div className="container-fluid sliderContent">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-10 col-sm-10 homeSlider__content">
                    <span>
                      Multi Employment Agency always deliver high quality
                      service.
                    </span>
                    <h1>Be Sure You Put Your Feet in Right Place.</h1>
                    <div className="slider__btn">
                      <NavLink className="link" to="/jobs">
                        Start Here
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
