import React, { useEffect, useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls";
import Logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import decode from "decode";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  // logout user after timer

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const value = { email, password };
    loginUser(dispatch, value);
    setTimeout(() => {
      window.location.replace("/");
    }, 1000);
  };

  return (
    <>
      <div className=" loginPage">
        <form className="loginFrom">
          {/* company logo */}
          <div className="compantLogo">
            <img src={Logo} alt="logo" />
          </div>
          <div className=" LoginFormContainer">
            <h4>Sign-In</h4>
            {/* email */}
            <div className="inputBox mt-3">
              <label>Email</label>
              <input
                label="Email"
                name="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* password */}
            <div className="inputBox mt-2">
              <label>Password</label>
              <input
                label="Password"
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="inputBox mt-1">
              {/* login button */}
              <button onClick={handleLogin} disabled={isFetching}>
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
