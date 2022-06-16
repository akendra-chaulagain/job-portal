import React from "react";
import { boardMembers } from "./boardMembers";
import "./Members.css";

const Members = () => {
  return (
    <>
      <div className="container-fluid boardMembers">
        <div className="row">
          <div className="boardMembersTopbar text-center">
            <h3>Our Team</h3>
          </div>
          {/* jobs content */}
          {boardMembers.map((item, id) => (
            <div
              className="col-6 col-sm-6 col-md-4 boardMembersContainer"
              key={id}
            >
              <div className="boardContainWrapper">
                {/* board members photo */}
                <div class="bordCard" key={id}>
                  <img
                    className="img-fluid"
                    src={item.img}
                    class="card-img-top"
                    alt="member_img"
                  />
                  <div class="card-body">
                    {/* member's name */}
                    <h5 class="card-title">{item.name}</h5>
                    {/* member's post */}
                    <p class="card-text">{item.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Members;
