import React from "react";
import Footer from "../../components/footer/Footer";
import JobsSection from "../../components/homeComponents/jobsSection/JobsSection";
import OurService from "../../components/homeComponents/ourService/OurService";
import Slider from "../../components/homeComponents/slider/Slider"

const Home = () => {
  return (
    <>
      {/* image slider */}
      <Slider />
      {/* availabe jobs */}
      <JobsSection />
      {/* our services */}
      <OurService />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
