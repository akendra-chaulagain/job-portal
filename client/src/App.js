import React from "react";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import MainTopbar from "./components/mainTopbar/MainTopbar";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Jobs from "./pages/jobs/Jobs";
import Recruitment from "./pages/Recruitment/Recruitment";
import Blog from "./pages/blog/Blog";

const App = () => {
  return (
    <>
      <MainTopbar />
      <Topbar />
      <Sidebar />
      {/* Home page */}
      {/* <Home /> */}
      {/* about us page */}
      {/* <About /> */}
      {/* job */}
      {/* <Jobs /> */}
      {/* Recruitment */}
      {/* <Recruitment /> */}
      <Blog />
    </>
  );
};

export default App;
