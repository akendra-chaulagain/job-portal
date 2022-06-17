import React from "react";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import MainTopbar from "./components/mainTopbar/MainTopbar";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Jobs from "./pages/jobs/Jobs";
import Recruitment from "./pages/Recruitment/Recruitment";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import JobApplication from "./pages/jobApplication/JobApplication";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleJobs from "./pages/singleJobs/SingleJobs";
import SingleBlog from "./pages/singleBlogPage/SingleBlog";
import CategoryJobs from "./pages/categoryJobs/CategoryJobs";

const App = () => {
  return (
    <>
      <Router>
        <MainTopbar />
        <Topbar />
        <Sidebar />
        <Routes>
          {/* home page */}
          <Route exact path="/" element={<Home />} />
          {/* about us */}
          <Route path="/about" element={<About />} />
          {/* contact */}
          <Route path="/contact" element={<Contact />} />
          {/* blog */}
          <Route path="/blog" element={<Blog />} />
          {/* jobs */}
          <Route path="/jobs" element={<Jobs />} />
          {/* jop application */}
          <Route path="/application" element={<JobApplication />} />
          {/* recruitment */}
          <Route path="/recruitment" element={<Recruitment />} />
          {/* single jobs page */}
          <Route path="/job/:title/:id" element={<SingleJobs />} />
          {/* singlre blog page */}
          <Route path="/single_blog/:id" element={<SingleBlog />} />

          {/* category item page */}
          <Route path="/job/trending/:name" element={<CategoryJobs />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
