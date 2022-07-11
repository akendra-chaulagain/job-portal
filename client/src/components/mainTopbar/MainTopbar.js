import React, { useEffect } from "react";
import "./MainTopbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserAdmin } from "../../redux/apiCalls";

const MainTopbar = () => {
  // get user
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    getUserAdmin(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid mainTopbar">
        <div className="row">
          {/* left side contain */}
          <div className="col-3 leftSideMainTopBar">
            {/* location icon */}
            <div className="locationIcon">
              {user.map((item) => (
                <div className="phoneCallIcon" key={item._id}>
                  <i className="fa-solid fa-location-dot"></i>
                  <span>{item.address}</span>
                </div>
              ))}
            </div>
          </div>
          {/* middle part contain */}
          <div className="col-5 middleSideMainTopBar">
            {user.map((item) => (
              <div className="phoneCallIcon" key={item._id}>
                <i className="fa-solid fa-phone"></i>
                <span>{item.contact}</span>
              </div>
            ))}

            <div className="officeTimeIcon">
              <i className="fa-solid fa-clock"></i>
              <span>Mon - Fri: 9:00AM - 8:00PM</span>
            </div>
          </div>
          {/* right side contain */}
          <div className="col-4 rightSidemainTopBar">
            {/* feace book */}
            {user.map((item) => (
              <div className="rightSideicons" key={item._id}>
                <a target="_blak" className="link" href={item.facebook}>
                  <i className="fa-brands fa-facebook"></i>
                </a>
                {/* instagram */}
                <a target="_blak" className="link" href={item.insta}>
                  <i className="fa-brands fa-instagram"></i>
                </a>
                {/* twitter */}
                <a target="_blak" href={item.twitter}>
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTopbar;
