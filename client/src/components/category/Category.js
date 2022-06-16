import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "../../redux/apiCalls";
import "./Category.css";

const Category = () => {
  // get all category
  const dispatch = useDispatch();
  const categoryData = useSelector((state) => state.category.categorys);

  useEffect(() => {
    getAllCategory(dispatch);
  }, [dispatch]);

  // filter jobs according to category
  const [catData, setCatData] = useState({});
  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get("/jobs/allJobs?cat=Sasf");
        setCatData(res.data);
      } catch (error) {}
    };
    getCategory();
  }, []);

  return (
    <>
      <div className="container-fluid category">
        <h3>Trending Jobs</h3>
        <div className="row">
          {categoryData.map((item) => (
            <div className=" col-md-2 col-3 categoryItem" key={item._id}>
              <p defaultValue={item.title}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
