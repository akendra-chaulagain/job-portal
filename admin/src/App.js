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
import NewJob from "./pages/createJob/NewJob";
import AddBlog from "./pages/AddBlog/AddBlog";
import EditBlog from "./pages/editBlog/EditBlog";
import Profile from "./pages/profile/Profile";
import "./App.css";
import ChangePassword from "./pages/changePassword/ChangePassword";
import Core from "./pages/setting/coreSetting/Core";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const user = true;
  return (
    <>
      <Router>
        {user && (
          <>
            <Topbar />
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
          {/* get all blogs */}
          <Route
            path="/blog"
            element={user ? <Blog /> : <Navigate to="/login" />}
          />
          {/* create new jobs */}
          <Route
            path="/createjobs"
            element={user ? <NewJob /> : <Navigate to="/login" />}
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

          {/* setting page */}
          <Route
            path="/setting/core"
            element={user ? <Core /> : <Navigate to="/login" />}
          />
        </Routes>
        {/* login container */}
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
