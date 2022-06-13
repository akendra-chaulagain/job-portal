import React from "react";
import Sidebar from "../../../components/sidebar/Sidebar";
import "./Core.css";
import CoreWidget from "../../../components/coreWidget/CoreWidget";

const Core = () => {
  return (
    <div className="core">
      <Sidebar />
      <div className="container coreContainer">
        <div className="row">
          <div className="col-3">
            {/* left side  */}
            <CoreWidget />
          </div>

          <div className="col-md-9">
            <h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              temporibus ducimus ipsam iste eligendi possimus. Numquam nihil
              illo debitis eius beatae ratione quidem velit facilis cum! Nisi
              accusantium nobis iure saepe ea hic. Soluta quod voluptates, odio
              voluptatibus exercitationem praesentium nesciunt similique
              reprehenderit ut. Aliquam, tempore quis? Tenetur amet libero atque
              animi consectetur veritatis quae nihil, eligendi fugiat
              temporibus, unde illo quas et modi recusandae repellat ea at
              delectus magnam architecto debitis similique, ducimus voluptas.
              Temporibus quo deserunt optio sed modi, nobis doloremque error
              obcaecati sequi neque aut eius officiis voluptate quis provident
              sunt sit ipsam minus unde. Earum, iure?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Core;
