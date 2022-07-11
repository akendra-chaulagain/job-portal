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
            <p>
              We’re proud to be a diverse, global team united by values
              including openness, positivity, and drive that stems from our
              founders. No matter how much our teams grow, <br /> we still feel like
              family.{" "}
            </p>
          </div>
          {/* jobs content */}
          {boardMembers.map((item, id) => (
            <div
              className="col-6 col-sm-6 col-md-4 boardMembersContainer"
              key={id}
            >
              <div className="boardContainWrapper">
                {/* board members photo */}
                <div className="bordCard" key={id}>
                  <img
                    src={item.img}
                    className="img-fluid card-img-top"
                    alt="member_img"
                  />
                  <div className="card-body">
                    {/* member's name */}
                    <h5 className="card-title">{item.name}</h5>
                    {/* member's post */}
                    <p className="card-text">{item.job}</p>
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
