import React from "react";
import "./Category.css";

const Category = () => {
  const category = [
    {
      id: 1,
      text: "Developer Developer",
    },
    {
      id: 2,
      text: "hotel",
    },
    {
      id: 3,
      text: "IT",
    },
    {
      id: 4,
      text: "Designer",
    },
    {
      id: 5,
      text: "Tourist",
    },
    {
      id: 6,
      text: "Manager",
    },
    {
      id: 7,
      text: "Animitor",
    },
    {
      id: 8,
      text: "Google",
    },
  ];
  return (
    <>
      <div className="container-fluid category">
        <h3>Trending Jobs</h3>
        <div className="row">
          {category.map((item) => (
            <div className=" col-md-2 col-3 categoryItem" key={item.id}>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
