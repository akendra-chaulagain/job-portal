import React from "react";
import Members from "../../components/boardMembers/Members";
import Footer from "../../components/footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container about">
        <div className="aboutTopData">
          <h3 className="text-center">About Us</h3>
        </div>
        <div className="aboutusWrapper">
          <div className="aboutUsdesc">
            <p>
              Founded in 2020, Multi Employment Agency connects jobseekers and
              recruiters by accurately matching candidate profiles to the
              relevant job openings through an advanced 2-way matching
              technology. While most job portals only focus on getting
              candidates the next job, Multi Employment Agency focuses on the
              entire career growth of candidates. <br />
              As the industry shifts towards mobile, Multi Employment Agency is
              leading the transition and is the fastest-growing job portal on
              mobile devices, witnessing a 100% YOY growth in mobile traffic and
              also offers on-the-go jobs through our app. We work closely to
              bridge the gap between talent & opportunities and offer end-to-end
              recruitment solutions.
            </p>
          </div>
        </div>
      </div>
      {/* board members import from board members components */}
      <Members />
      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
