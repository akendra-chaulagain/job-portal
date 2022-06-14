import React from "react";
import "./OurService.css";

const OurService = () => {
  return (
    <div className=" container ourService">
      <h1 className="text-center"> Our Services</h1>
      <div className="row">
        {/* our service firts images */}

        <div className="col-md-5 ourServiceFirstImg">
          <img
            className="img-fluid"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        {/* our service desc */}
        <div className="col-md-7 ourServiceFirst">
          <div className="ourServiceFirstTitle text-center">Lorem, ipsum.</div>

          <div className="ourServiceFirstDesc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
              beatae maiores quo veritatis laborum vel praesentium ipsam error
              mollitia saepe dolorem accusantium vero. Non doloribus veniam
              fugit tempore quisquam aut corrupti cum. Odit, assumenda
              consequatur adipisci vel fugiat accusantium suscipit laudantium
              cupiditate cumque natus quia? Quas sint molestiae id beatae optio
              sunt pariatur, fugiat, rem modi veniam magnam! Sequi minus
              repudiandae pariatur. Sint aliquam culpa hic iusto adipisci beatae
              totam, perferendis recusandae quam fugit at dignissimos maxime
              libero repudiandae corrupti quasi unde earum iure impedit. Quod
              veniam saepe eveniet minima libero maxime iusto eius natus
              quisquam architecto? Reprehenderit, corrupti laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
