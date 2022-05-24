import React from "react";
import Slider from "../../components/homeComponents/imageSlider/Slider";
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
    </>
  );
};

export default Home;
