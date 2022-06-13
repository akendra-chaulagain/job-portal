import React from "react";
import Footer from "../../components/footer/Footer";
import Slider from "../../components/homeComponents/imageSlider/Slider";
import JobsSection from "../../components/homeComponents/jobsSection/JobsSection";

const Home = () => {
  return (
    <>
      {/* image slider */}
      <Slider />
      {/* availabe jobs */}
      <JobsSection />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
