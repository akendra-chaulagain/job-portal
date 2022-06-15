import axios from "axios";
import {
  createBlogFailure,
  createBlogStart,
  createBlogSuccess,
  deleteBlogFailure,
  deleteBlogStart,
  deleteBlogSuccess,
  getBlogsFailure,
  getBlogsStart,
  getBlogsSuccess,
  updateBlogsFailure,
  updateBlogsStart,
  updateBlogsSuccess,
} from "./blogReducer";
import {
  deleteCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  getCategorysFailure,
  getCategorysStart,
  getCategorysSuccess,
  updateCategorysFailure,
  updateCategorysStart,
  updateCategorysSuccess,
} from "./categoryReducer";
import {
  createJobFailure,
  createJobStart,
  createJobSuccess,
  deleteJobFailure,
  deleteJobStart,
  deleteJobSuccess,
  getJobsFailure,
  getJobsStart,
  getJobsSuccess,
  updateJobsFailure,
  updateJobsStart,
  updateJobsSuccess,
} from "./jobsReducer";
import { loginfailure, loginStart, loginSuccess } from "./userReducer";

// login user
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginfailure());
    console.log(error);
    alert("ak");
  }
};

// get all jobs
export const getAllJobs = async (dispatch) => {
  dispatch(getJobsStart());
  try {
    const res = await axios.get("/jobs/allJobs");
    dispatch(getJobsSuccess(res.data));
  } catch (error) {
    dispatch(getJobsFailure());
    console.log(error);
  }
};

// create jobs
export const createJobs = async (jobs, dispatch) => {
  dispatch(createJobStart());
  try {
    await axios.post(`/jobs`, jobs);
    dispatch(createJobSuccess(jobs.data));
  } catch (error) {
    console.log("unable to create jobs" + error);
    dispatch(createJobFailure());
    console.log(error);
  }
};

// delete jobs
export const deleteJobs = async (id, dispatch) => {
  dispatch(deleteJobStart());
  try {
    await axios.delete(`/jobs/${id}`);
    dispatch(deleteJobSuccess(id));
  } catch (error) {
    console.log("unable to delete jobs" + error);
    dispatch(deleteJobFailure());
    console.log(error);
  }
};

// update jobs
export const updateProducts = async (id, jobs, dispatch) => {
  dispatch(updateJobsStart());
  try {
    await axios.put(`/jobs/${id}`, jobs);
    dispatch(updateJobsSuccess(id, jobs));
  } catch (error) {
    console.log("unable to update job" + error);
    dispatch(updateJobsFailure());
  }
};

// blog section

// get all blog
export const getAllBlog = async (dispatch) => {
  dispatch(getBlogsStart());
  try {
    const res = await axios.get("/blog/allBlog");
    dispatch(getBlogsSuccess(res.data));
  } catch (error) {
    dispatch(getBlogsFailure());
    console.log(error);
  }
};

// create blog
export const createBlog = async (blogData, dispatch) => {
  dispatch(createBlogStart());
  try {
    await axios.post(`/blog`, blogData);
    dispatch(createBlogSuccess(blogData.data));
  } catch (error) {
    console.log("unable to create blog" + error);
    dispatch(createBlogFailure());
    console.log(error);
  }
};

// update blogs
export const updateBlog = async (id, blogs, dispatch) => {
  dispatch(updateBlogsStart());
  try {
    await axios.put(`/blog/${id}`, blogs);
    dispatch(updateBlogsSuccess(id, blogs));
  } catch (error) {
    console.log("unable to update blog" + error);
    dispatch(updateBlogsFailure());
  }
};
// delete blog
export const deleteBlog = async (id, dispatch) => {
  dispatch(deleteBlogStart());
  try {
    await axios.delete(`/blog/${id}`);
    dispatch(deleteBlogSuccess(id));
    alert("success");
  } catch (error) {
    console.log("unable to delete Blog" + error);
    dispatch(deleteBlogFailure());
    console.log(error);
  }
};

// category section

// get all blog
export const getAllCategory = async (dispatch) => {
  dispatch(getCategorysStart());
  try {
    const res = await axios.get("/category/allCategory");
    dispatch(getCategorysSuccess(res.data));
  } catch (error) {
    dispatch(getCategorysFailure());
    console.log(error);
  }
};

// create blog
export const createCategory = async (blogData, dispatch) => {
  dispatch(createBlogStart());
  try {
    await axios.post(`/category`, blogData);
    dispatch(createBlogSuccess(blogData.data));
    alert("success");
  } catch (error) {
    console.log("unable to create blog" + error);
    dispatch(createBlogFailure());
    console.log(error);
  }
};

// update category
export const updateCategory = async (id, cat, dispatch) => {
  dispatch(updateCategorysStart());
  try {
    await axios.put(`/category/${id}`, cat);
    dispatch(updateCategorysSuccess(id, cat));
    alert("updated");
  } catch (error) {
    console.log("unable to update category" + error);
    dispatch(updateCategorysFailure());
  }
};

// delete blog
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await axios.delete(`/category/${id}`);
    dispatch(deleteCategorySuccess(id));
    alert("success");
  } catch (error) {
    console.log("unable to delete category" + error);
    dispatch(deleteCategoryFailure());
    console.log(error);
  }
};
