import React from "react";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/homeComponents/imageSlider/Slider";
import JobsSection from "../../components/homeComponents/jobsSection/JobsSection";
import OurService from "../../components/homeComponents/ourService/OurService";

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
