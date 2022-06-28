import React, { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginTextField from "../../components/loginTextField/LoginTextField";
import { loginUser } from "../../redux/apiCalls";
import Logo from "../../assets/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const dispactch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  // logout user after timer

  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(dispactch, { email, password });
    navigate("/");
  };

  return (
    <>
      {/* <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          loginUser(dispactch, values);
          navigate("/");
        }}
      > */}
      {/* <Form> */}
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
                name="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* password */}
            <div className="inputBox mt-2">
              <label>Password</label>
              <input
                name="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="inputBox mt-1">
              {/* login button */}
              <button disabled={isFetching} onClick={handleLogin}>
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* </Form>
      </Formik> */}
    </>
  );
};

export default Login;
