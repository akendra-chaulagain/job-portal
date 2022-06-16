import React from "react";
import "./Blog.css";
import { blogData } from "./blodData";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  return (
    <>
      <div className="container blog">
        <div className="blogTop">
          <h3 className="text-center">Blogs</h3>
        </div>
        <div className="row">
          {blogData.map((item, id) => (
            <>
              <div className="col-6 col-sm-6 col-md-3  blogContainer" key={id}>
                <div className="blogContainWrapper">
                  {/* board members photo */}
                  <div class="card" key={id}>
                    <img src={item.img} class="card-img-top" alt="member_img" />
                    <div class="card-body">
                      {/* blog's title */}
                      <h5 class="card-title text-center">{item.title}</h5>
                      {/*date*/}
                      <p class="card-text mb-2">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Blog;
