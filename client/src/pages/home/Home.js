import React from "react";
import Footer from "../../components/footer/Footer";
import Employers from "../../components/homeComponents/employers/Employers";
import Slider from "../../components/homeComponents/imageSlider/Slider";
import JobsSection from "../../components/homeComponents/jobsSection/JobsSection";
import OurServices from "../../components/homeComponents/ourServices/OurServices";
import MainTopbar from "../../components/mainTopbar/MainTopbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

const Home = () => {
  return (
    <>
      {/* Main top bar from components */}
      <MainTopbar />
      {/* top bar from components */}
      <Topbar />
      {/* sidebar */}
      <Sidebar />
      {/* image slider */}
      <Slider />
      {/* availabe jobs */}
      <JobsSection />
      {/* our services import from home component */}
      <OurServices />
      {/* employers from home components */}
      <Employers />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
