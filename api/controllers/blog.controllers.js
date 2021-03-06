//  database
require("../database/connection");

// Blog model
const Blog = require("../models/Blog");

// create Blog (only admin can create job)
const createBlog = async (req, res) => {
  const body = req.body;
  const newList = new Blog(body);
  try {
    const result = await newList.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(200).json(error);
  }
};

// update Blog  (only admin can update job)
const updateBlog = async (req, res, next) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    return res.status(201).json(updatedBlog);
  } catch (error) {
    next(error);
  }
};

// delete Blog  (only admin can delete job)
const deleteBlog = async (req, res, next) => {
  try {
    const deleteBlog = await Blog.findByIdAndDelete(req.params.id);
    return res.status(201).json(deleteBlog);
  } catch (error) {
    next(error);
  }
};

// get individual Blog by id
const getBlogById = async (req, res, next) => {
  try {
    const result = await Blog.findById(req.params.id);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

// get all Blog
const getAllBlog = async (req, res, next) => {
  try {
    const data = await Blog.find().sort({ _id: -1 });
    res.status(201).json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
};
