import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./ChangePassword.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/apiCalls";
import InputField from "../../components/inputFiled/InputFiled";

const ChangePassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const userId = user.others._id;

  const validate = Yup.object({
    password: Yup.string()
      .min(6, "Password is too short -should be 6 characters minimum")
      .required("Password is required!"),
    cpassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password does not match!"
    ),
  });

  return (
    <>
      <div className="profile">
        <Sidebar />
        <div className="profileContainer">
          {/* pfofile top content */}
          <div className="profileTitil">Profile</div>
          <div className="profileTopbar">
            {/* information icon */}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/profile"
            >
              <i className="fa-solid fa-circle-info"></i>
              information
            </NavLink>
            {/* key icon(password icons) */}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/password"
            >
              <i className="fa-solid fa-lock"></i>
              security
            </NavLink>
          </div>

          <Formik
            initialValues={{
              password: "",
              cpassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              updateProfile(userId, values, dispatch);
              navigate("/profile");
            }}
          >
            {/* change email and user name input field */}
            <Form action="" className="changeUserDataPassword">
              {/* new password */}
              <div className="changeUserDataPasswordField">
                <label htmlFor="">New Password</label>
                <br />
                <InputField label="Password" name="password" type="password" />
              </div>
              {/* confirm password */}
              <div className="changeUserDataPasswordField">
                <label htmlFor="">Confirm Password</label>
                <br />
                <InputField label="Password" name="cpassword" type="password" />
              </div>
              {/* submit button */}
              <div className="changePasswordButton">
                <button>save changes</button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
