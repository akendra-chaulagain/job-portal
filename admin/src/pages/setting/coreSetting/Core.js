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
import { updateProfile } from "../../../redux/apiCalls";
import { useDispatch } from "react-redux";
import { userRequest } from "../../../RequestMethod";
import Loader from "../../../components/Loader/Loader";
import { useNavigate } from "react-router-dom";

const Core = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  // get user data from user id
  const [isLoading, setLoading] = useState(true);
  const [didMount, setDidMount] = useState(false);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setLoading(true);
    const getUserData = async () => {
      setDidMount(true);
      try {
        const res = await userRequest.get("/user/find/" + userId);
        setUserData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
    setLoading(false);
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
  const [metaTitle, setMetaTitle] = useState(userData.metaTitle);
  const [metaKey, setMetaKey] = useState(userData.metaKey);
  const [metaDesc, setMetaDesc] = useState(userData.metaDesc);

  // firebase is used to store images and videos in email id
  const handleSubmitData = (e) => {
    e.preventDefault();

    if (selectImagesProfile) {
      const storage = getStorage(app);
      const storageRef = ref(storage, selectImagesProfile.name);
      const uploadTask = uploadBytesResumable(storageRef, selectImagesProfile);
      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = <Loader />;
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
              logo: downloadURL,
              contactEmail,
              brandname,
              contact,
              twitter,
              facebook,
              insta,
              desc,
              metaDesc,
              metaTitle,
              metaKey,
            };
            updateProfile(userId, data, dispatch);
            navigate("/profile");
          });
        }
      );
    } else {
      const data = {
        contactEmail,
        brandname,
        contact,
        twitter,
        facebook,
        insta,
        desc,
        metaDesc,
        metaTitle,
        metaKey,
      };
      updateProfile(userId, data, dispatch);
      navigate("/setting/core");
    }
  };

  return (
    <div className="core">
      <Sidebar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container coreContainer">
          {progress ? (
            <Loader />
          ) : (
            <>
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
                        <div className="uploadLogoBtnImg">
                          <img src={image} alt="img" />
                          <label htmlFor="files">
                            <p>Logo</p>
                            <input
                              type="file"
                              id="files"
                              style={{ display: "none" }}
                              name="logo"
                              onChange={onImageChange}
                            />
                          </label>
                        </div>
                      </>
                    ) : (
                      <div className=" uploadLogoBtnImg mt-3">
                        <img src={userData.logo} alt="blog_img" />
                        <label htmlFor="files">
                          <p>Logo</p>
                          <input
                            type="file"
                            id="files"
                            style={{ display: "none" }}
                            name="logo"
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
                    {/* instagram */}
                    <div className="coreInputField">
                      <br />
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
                    {/* seo keywords(SEO MetaData) */}
                    <div className="col-md-12">
                      {/* meta data */}
                      <div className="settingSeoMetaData mt-3">
                        {/* meta title */}
                        <p>SEO Meta</p>
                        <div className="coreInputFieldItem">
                          <label htmlFor="">Meta Title</label>
                          <br />
                          <input
                            type="text"
                            name="metaTitle"
                            defaultValue={userData.metaTitle}
                            autoComplete="off"
                            onChange={(e) => setMetaTitle(e.target.value)}
                          />
                        </div>
                        {/* meta keywords */}
                        <div className="coreInputFieldItem">
                          <label htmlFor="">Meta KeyWords</label>
                          <br />
                          <input
                            type="text"
                            name="metaKey"
                            defaultValue={userData.metaKey}
                            autoComplete="off"
                            onChange={(e) => setMetaKey(e.target.value)}
                          />
                        </div>
                        {/* meta desc */}
                        <div className="coreInputFieldItem">
                          <label htmlFor="">Meta Description</label>
                          <br />
                          <input
                            type="text"
                            name="metadesc"
                            defaultValue={userData.metaDesc}
                            autoComplete="off"
                            onChange={(e) => setMetaDesc(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* save button */}
                    <div className="seveButton">
                      <button onClick={handleSubmitData}>save changes</button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Core;
