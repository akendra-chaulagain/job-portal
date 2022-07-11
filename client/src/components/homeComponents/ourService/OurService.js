import React from "react";
import "./OurService.css";

const OurService = () => {
  return (
    <div className=" container ourService">
      <h1 className="text-center"> Our Services</h1>
      <div className="row">
        {/* our service firts images */}

        <div className="col-md-5 ourServiceFirstImg">
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        {/* our service desc */}
        <div className="col-md-7 ourServiceFirst">
          <div className="ourServiceFirstTitle text-center">Lorem, ipsum.</div>

          <div className="ourServiceFirstDesc">
            <p>
              Those days are long gone when you have to work on every single
              service on your own. If you have a limited budget and cannot work
              for in-house services all the time, then you might think about
              dealing with outsourcing recruitment services. And for the best
              recruitment, you can bang on Multi Employment Agency . <br />
              We are associated with the field of offshore recruitment services
              for years now, and can easily offer you with quality help. Whether
              you want help for a small firm or just looking for best
              offshore recruitment for larger enterprises, we are happy to help.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
