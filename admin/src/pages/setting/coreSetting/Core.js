import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./Core.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import CoreWidget from "../../../components/coreWidget/CoreWidget";
import axios from "axios";
import { updateProfile } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";

const Core = () => {
  const userId = localStorage.getItem("userId");
  // get user data from user id
  const [didMount, setDidMount] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserData = async () => {
      setDidMount(true);

      try {
        const res = await axios.get("/user/find/" + userId);
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
    return () => setDidMount(false);
  }, [userId]);

  // preview profile iamges before uploading
  const [image, setImage] = useState(null);
  const [selectImagesProfile, setSelectImagesProfile] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
      setSelectImagesProfile(event.target.files[0]);
    }
  };

  // update user details
  const dispatch = useDispatch();
  const [progress, setProgress] = useState();
  const [contactEmail, setContactEmail] = useState(userData.contactEmail);
  const [desc, setDesc] = useState(userData.desc);
  const [brandname, setBrandname] = useState(userData.brandname);
  const [facebook, setFacebook] = useState(userData.facebook);
  const [twitter, setTwitter] = useState(userData.twitter);
  const [insta, setInsta] = useState(userData.insta);
  const [contact, setcontact] = useState(userData.contact);

  // firebase is used to store images and videos in email id
  const handleSubmitData = (e) => {
    e.preventDefault();
    const storage = getStorage(app);
    const storageRef = ref(storage, selectImagesProfile.name);
    const uploadTask = uploadBytesResumable(storageRef, selectImagesProfile);
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = "Processing..";
        setProgress(progress);
        switch (snapshot.state) {
          case "paused":
            setProgress(progress);
            break;
          case "running":
            setProgress(progress);
            break;
          default:
        }
      },
      (error) => {},
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const data = {
            img: downloadURL,
            contactEmail,
            brandname,
            contact,
            twitter,
            facebook,
            insta,
            desc,
          };
          updateProfile(userId, data, dispatch);
        });
      }
    );
  };

  return (
    <div className="core">
      <Sidebar />
      <div className="container coreContainer">
        <div className="row">
          <div className="col-3 coreLeft">
            {/* left side  */}
            <CoreWidget />
          </div>

          <div className="col-md-9 coreRight">
            {/* company logo */}
            <div className="text-center companyLogo">
              {/* company logo */}
              {/* show select  img if user select the image  from the device*/}
              {image ? (
                <>
                  <div className="uploadLogoBtn">
                    <img src={image} alt="" />
                    <label htmlFor="files">
                      <p>Select Logo</p>
                      <input
                        type="file"
                        id="files"
                        style={{ display: "none" }}
                        name="coverPic"
                        onChange={onImageChange}
                      />
                    </label>
                  </div>
                </>
              ) : (
                <div className=" uploadLogoBtnImg mt-3">
                  <label htmlFor="files">
                    Upload Logo
                    <br />
                    <p>Upload Logo</p>
                    <input
                      type="file"
                      id="files"
                      style={{ display: "none" }}
                      name="coverPic"
                      onChange={onImageChange}
                    />
                  </label>
                </div>
              )}
            </div>
            {/* input filed */}
            <form action="" className="coreFields">
              {/* input fields */}
              <div className="coreInputField">
                {/* brandname */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Brand Name</label>
                  <br />
                  <input
                    type="text"
                    defaultValue={userData.brandname}
                    name="brandname"
                    autoComplete="off"
                    onChange={(e) => setBrandname(e.target.value)}
                  />
                </div>
              </div>
              {/* description */}
              <div className="coreInputField">
                <div className="coreInputFieldItem">
                  <label htmlFor="">Description</label>
                  <br />
                  <textarea
                    type="text"
                    defaultValue={userData.desc}
                    name="desc"
                    autoComplete="off"
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>
              </div>

              {/* contact details */}
              <div className="contactDetails">
                <p>Contact Details</p>
              </div>
              <div className="coreInputField">
                <br />
                {/*  contact Email*/}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Contact Email</label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setContactEmail(e.target.value)}
                    name="contactEmail"
                    autoComplete="off"
                    defaultValue={userData.contactEmail}
                  />
                </div>

                {/* contact number */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Contact Number</label>
                  <br />
                  <input
                    type="number"
                    defaultValue={userData.contact}
                    name="contact"
                    autoComplete="off"
                    onChange={(e) => setcontact(e.target.value)}
                  />
                </div>
              </div>
              {/* social information */}
              <div className="socialDetails">
                <p>Social Information</p>
              </div>
              <div className="coreInputField">
                <br />
                {/* facebook */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Facebook link</label>
                  <br />
                  <input
                    type="text"
                    defaultValue={userData.facebook}
                    name="facebook"
                    autoComplete="off"
                    onChange={(e) => setFacebook(e.target.value)}
                  />
                </div>
                {/* twitter */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Twitter link</label>
                  <br />
                  <input
                    type="text"
                    defaultValue={userData.twitter}
                    name="twitter"
                    autoComplete="off"
                    onChange={(e) => setTwitter(e.target.value)}
                  />
                </div>
              </div>
              <div className="coreInputField">
                <br />
                {/* insta */}
                <div className="coreInputFieldItem">
                  <label htmlFor="">Instagram link</label>
                  <br />
                  <input
                    type="text"
                    defaultValue={userData.insta}
                    name="insta"
                    autoComplete="off"
                    onChange={(e) => setInsta(e.target.value)}
                  />
                </div>
              </div>
              {/* save button */}
              <div className="seveButton">
                <button onClick={handleSubmitData}>save changes</button>
                {progress}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
