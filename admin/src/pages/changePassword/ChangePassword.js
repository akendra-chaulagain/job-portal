import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./ChangePassword.css";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/apiCalls";
import InputField from "../../components/inputFiled/InputFiled";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const validate = Yup.object({
    // email: Yup.string().email("Invalid email!").required("Email is required!"),
    currentPassword: Yup.string().required("Current password is required!"),
    newPassword: Yup.string().required("New password is required!"),
    confirmPassword: Yup.string().required("Confirm password is required!"),
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
              <i class="fa-solid fa-circle-info"></i>
              information
            </NavLink>
            {/* key icon(password icons) */}
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "")}
              to="/password"
            >
              <i class="fa-solid fa-lock"></i>
              security
            </NavLink>
          </div>

          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              updateProfile(dispatch, values).then(() => {
                window.location.replace("/");
              });
            }}
          >
            {/* change email and user name input field */}
            <Form action="" className="changeUserDataPassword">
              {/* currentPassword */}
              <div className="changeUserDataPasswordField">
                <label htmlFor="">Current Password</label>
                <br />
                <InputField
                  label="Password"
                  name="currentPassword"
                  type="password"
                />
              </div>
              {/* new password */}
              <div className="changeUserDataPasswordField">
                <label htmlFor="">New Password</label>
                <br />
                <InputField
                  label="Password"
                  name="newPassword"
                  type="password"
                />
              </div>
              {/* current password */}
              <div className="changeUserDataPasswordField">
                <label htmlFor=""> Password</label>
                <br />
                <InputField
                  label="Password"
                  name="confirmPassword"
                  type="password"
                />
              </div>
            </Form>
          </Formik>

          {/* submit button */}
          <div className="changePasswordButton">
            <button>save changes</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
