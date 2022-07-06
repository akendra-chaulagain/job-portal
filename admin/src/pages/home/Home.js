import React from "react";
import "./Home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/Widget";

import { useNavigate } from "react-router-dom";

const Home = () => {


  return (
    <>
      <div className="home">
        <Sidebar />

        <div className="homeContainer">
          {/* import from widget component */}
          <Widget />
        </div>
      </div>
    </>
  );
};

export default Home;
