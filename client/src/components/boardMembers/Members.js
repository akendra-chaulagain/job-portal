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
            <div className="col-md-4 boardMembersContainer" key={id}>
              <div className="boardContainWrapper">
                {/* board members photo */}
                <div class="card" key={id}>
                  <img src={item.img} class="card-img-top" alt="member_img" />
                  <div class="card-body">
                    {/* member's name */}
                    <h5 class="card-title">{item.name}</h5>
                    {/* member's post */}
                    <p class="card-text">{item.job}</p>
                    {/* member's desc */}
                    <p>{item.desc}</p>
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
