import React from "react";
import Members from "../../components/boardMembers/Members";
import Footer from "../../components/footer/Footer";
import "./About.css";

const About = () => {
  return (
    <>
     
      <div className="container about">
        <div className="aboutTopData">
          <h3 className="text-center">About Us</h3>
        </div>
        <div className="aboutusWrapper">
          <div className="aboutUsdesc">
            <h3>Company Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quo
              asperiores laudantium in minima est quis aliquam, deleniti illo
              saepe ut culpa ea perspiciatis consequatur voluptatibus expedita
              non voluptas nulla velit voluptate. Veritatis commodi, asperiores
              veniam eveniet, sit dolorum doloribus distinctio quod architecto
              deleniti at numquam ipsum odio velit minus? Officia modi libero,
              cum tenetur debitis vero quae minus consequuntur aspernatur non
              nulla ad dicta, rem deleniti quas dolores architecto nisi. Optio
              dolores modi sapiente itaque vel, aliquam aperiam beatae quidem
              atque laudantium sequi delectus voluptates distinctio molestiae
              cum cumque obcaecati recusandae deleniti similique, dignissimos et
              doloremque? Dignissimos, assumenda nihil?
            </p>
          </div>
        </div>
      </div>
      {/* board members import from board members components */}
      <Members />
      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
