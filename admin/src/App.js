import React from "react";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Topbar from "./components/navbar/Topbar";
import Blog from "./pages/blog/Blog";
import EditJobs from "./pages/editJobs/EditJobs";
import Login from "./pages/login/Login";
import AllJobs from "./pages/allJobs/AllJobs";
import AddBlog from "./pages/AddBlog/AddBlog";
import EditBlog from "./pages/editBlog/EditBlog";
import Profile from "./pages/profile/Profile";
import "./App.css";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Core from "./pages/setting/coreSetting/Core";
import EmailSetting from "./pages/setting/emailSetting/EmailSetting";
import SliderBar from "./components/sliderBar/SliderBar";
import AddJob from "./pages/createJob/NewJob";
import AllCategory from "./pages/category/AllCategory";
import CreateCategory from "./pages/createCategory/CreateCategory";
import EditCategory from "./pages/editCategory/EditCategory";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  return (
    <>
      <Router>
        {user && (
          <>
            <Topbar />
            <SliderBar />
          </>
        )}
        <Routes>
          {/* home page */}
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          {/* all jobs page */}
          <Route
            path="/jobs"
            element={user ? <AllJobs /> : <Navigate to="/login" />}
          />
          {/* get jobs by id */}
          <Route
            path="/job/:id"
            element={user ? <EditJobs /> : <Navigate to="/login" />}
          />
          {/* create new jobs */}
          <Route
            exact
            path="/createjobs"
            element={user ? <AddJob /> : <Navigate to="/login" />}
          />

          {/* get all blogs */}
          <Route
            path="/blog"
            element={user ? <Blog /> : <Navigate to="/login" />}
          />

          {/* creat enew blogs */}
          <Route
            path="/newblog"
            element={user ? <AddBlog /> : <Navigate to="/login" />}
          />

          {/* update blogs */}
          <Route
            path="/blog/:id"
            element={user ? <EditBlog /> : <Navigate to="/login" />}
          />

          {/* profile page */}
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
          {/* password change page */}
          <Route
            path="/password"
            element={user ? <ChangePassword /> : <Navigate to="/login" />}
          />

          {/* core */}
          <Route
            path="/setting/core"
            element={user ? <Core /> : <Navigate to="/login" />}
          />
          {/* email setting */}
          <Route
            path="/setting/email_setting"
            element={user ? <EmailSetting /> : <Navigate to="/login" />}
          />
          {/* category */}
          <Route
            path="/category"
            element={user ? <AllCategory /> : <Navigate to="/login" />}
          />
          {/* create category */}
          <Route
            path="/create_cat"
            element={user ? <CreateCategory /> : <Navigate to="/login" />}
          />
          {/* edit cat */}
          <Route
            path="/edit_cat/:id"
            element={user ? <EditCategory /> : <Navigate to="/login" />}
          />
        </Routes>

        {/* login container */}
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
