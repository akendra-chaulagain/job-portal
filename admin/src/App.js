import React from "react";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Topbar from "./components/navbar/Topbar";
import SingleUser from "./pages/singleuser/SingleUser";
import Blog from "./pages/blog/Blog";

import Login from "./pages/login/Login";
import Update from "./pages/updateProduct/Update";
import AllJobs from "./pages/allJobs/AllJobs";
import NewJob from "./pages/createJob/NewJob";
import AddBlog from "./pages/AddBlog/AddBlog"

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
          {/* jobs page */}
          <Route
            path="/jobs"
            element={user ? <AllJobs /> : <Navigate to="/login" />}
          />
          {/* get jobs by id */}
          <Route
            path="list/:id"
            element={user ? <SingleUser /> : <Navigate to="/login" />}
          />
          {/* get all blogs */}
          <Route
            path="/blog"
            element={user ? <Blog /> : <Navigate to="/login" />}
          />
          {/* for creating new jobs */}
          <Route
            path="/createjobs"
            element={user ? <NewJob /> : <Navigate to="/login" />}
          />

          {/* creat enew blogs */}
          <Route
            path="/newblog"
            element={user ? <AddBlog /> : <Navigate to="/login" />}
          />

          {/* fro update blog product */}
          <Route
            path="/blog/:id"
            element={user ? <Update /> : <Navigate to="/login" />}
          />
        </Routes>
        {/* login container */}
        <Routes>
          {/* view single order */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
