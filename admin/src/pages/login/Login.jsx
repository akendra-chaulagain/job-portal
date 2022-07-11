import React from "react";
import "./Login.css";
// ReactToastify is use for alert
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/apiCalls";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import RegisterTextField from "../../components/RegisterTextField/RegisterTextField";
import Logo from "../../assets/logo/logo.png";

const Login = () => {
  const dispactch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);
  // logout user after timer

  const validate = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          loginUser(dispactch, values);
        }}
      >
        <Form>
          <div className=" loginPage">
            <div className="loginFrom">
              <div className="compantLogo">
                <img src={Logo} alt="logo" />
              </div>
              <div className=" LoginFormContainer">
                <h4>Sign-In</h4>
                <div className="inputBox mt-3">
                  <label>Email</label>
                  <RegisterTextField label="Email" name="email" type="text" />
                </div>

                <div className="inputBox mt-2">
                  <label>Password</label>
                  <RegisterTextField
                    label="Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="inputBox mt-2">
                  {/* login button */}
                  <button disabled={isFetching}>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      {/* ReactToastify container */}
      <ToastContainer />
    </>
  );
};

export default Login;
