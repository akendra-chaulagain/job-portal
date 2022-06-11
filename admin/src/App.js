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
import Allproduct from "./pages/product/Allproduct";

import Login from "./pages/login/Login";
import Update from "./pages/updateProduct/Update";
import NewProduct from "./pages/new/NewProduct";
import AllJobs from "./pages/allJobs/AllJobs";
// import { Navigate } from "react-router-dom";

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
          {/* user list page */}
          <Route
            path="/jobs"
            element={user ? <AllJobs /> : <Navigate to="/login" />}
          />
          {/* get user by id */}
          <Route
            path="list/:id"
            element={user ? <SingleUser /> : <Navigate to="/login" />}
          />
          {/* get all product */}
          <Route
            path="/product"
            element={user ? <Allproduct /> : <Navigate to="/login" />}
          />
          {/* for creating new product */}
          <Route
            path="/createjobs"
            element={user ? <NewProduct /> : <Navigate to="/login" />}
          />
          {/* fro update product */}
          <Route
            path="/product/:id"
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
