import React from "react";
import "./Login.css";
// ReactToastify is use for alert
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import LoginTextField from "../../components/loginTextField/LoginTextField";
import { loginUser } from "../../redux/apiCalls";
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
          loginUser(dispactch, values).then(() => {
            window.location.replace("/");
          });
        }}
      >
        <Form>
          <div className=" loginPage">
            <div className="loginFrom">
              {/* company logo */}
              <div className="compantLogo">
                <img src={Logo} alt="logo" />
              </div>
              <div className=" LoginFormContainer">
                <h4>Sign-In</h4>
                {/* email */}
                <div className="inputBox mt-3">
                  <label>Email</label>
                  <LoginTextField label="Email" name="email" type="text" />
                </div>

                {/* password */}
                <div className="inputBox mt-2">
                  <label>Password</label>
                  <LoginTextField
                    label="Password"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="inputBox mt-1">
                  {/* login button */}
                  <button disabled={isFetching}>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
