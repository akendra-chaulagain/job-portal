import React from "react";
import CoreWidget from "../../../components/coreWidget/CoreWidget";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./EmailSetting.css";

const EmailSetting = () => {
  return (
    <>
      <div className="emailSetting">
        <Sidebar />
        <div className="container-fluid emailSettingContainer">
          <div className="row">
            <div className="col-3 emailSettingLeft">
              <CoreWidget />
            </div>
            <div className="col-9 emailSettingRight">
              <form action="" className="coreFields">
                {/* input fields */}
                <div className="coreInputField">
                  {/* brandname */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Brand Name</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                  {/* brand acronym */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Brand Acronym</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                </div>
                {/* description */}
                <div className="coreInputField">
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Description</label>
                    <br />
                    <textarea type="text" name="title" autoComplete="off" />
                  </div>
                </div>

                {/* contact details */}
                <div className="contactDetails">
                  <p>Contact Details</p>
                </div>
                <div className="coreInputField">
                  <br />
                  {/* brandname */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Email</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                  {/* brand acronym */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Contact Number</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                </div>
                {/* social information */}
                <div className="socialDetails">
                  <p>Social Information</p>
                </div>
                <div className="coreInputField">
                  <br />
                  {/* brandname */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Facebook</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                  {/* brand acronym */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Twitter</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                </div>
                <div className="coreInputField">
                  <br />
                  {/* brandname */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Instagram</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                  {/* brand acronym */}
                  <div className="coreInputFieldItem">
                    <label htmlFor="">Linkedin</label>
                    <br />
                    <input type="text" name="title" autoComplete="off" />
                  </div>
                </div>
                {/* save button */}
                <div className="seveButton">
                  <button>save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSetting;
