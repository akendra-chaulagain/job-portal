import React from "react";
import "./Slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <>
      <div className="curoselContainer">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
        >
          {/* first img */}
          <div className="curosel-item">
            <img
              src="https://images.pexels.com/photos/442573/pexels-photo-442573.jpeg"
              alt="alider_Img"
            />
            <div className="bottomLeftContain">
              <h3>Keep in touch & stay updated</h3>
              <button>Click Here</button>
            </div>
          </div>
          {/* second img */}
          <div className="curosel-item">
            <img
              src="https://images.pexels.com/photos/38293/workers-construction-site-hardhats-38293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1eg"
              alt="alider_Img"
            />
            <div className="bottomLeftContain">
              <h3>Keep in touch & stay updated</h3>
              <button>Click Here</button>
            </div>
          </div>
          {/* third img */}
          <div className="curosel-item">
            <img
              src="https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g"
              alt="alider_Img"
            />
            <div className="bottomLeftContain">
              <h3>Keep in touch & stay updated</h3>
              <button>Click Here</button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
