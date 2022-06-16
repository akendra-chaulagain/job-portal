import { userRequest } from "../RequestMethod";
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
import {
  loginfailure,
  loginStart,
  loginSuccess,
  updateUserStart,
  updateUserSuccess,
} from "./userReducer";

import { toast, Zoom } from "react-toastify";

// success tostify
const tostifySuccess = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  progress: undefined,
};

// failure tostify
const tostifyFailure = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  theme: "dark",
  progress: undefined,
};

// login user
export const loginUser = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await userRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginfailure());
    console.log(error);
    toast.error(" Login failed!", tostifyFailure);
  }
};

// update profile
export const updateProfile = async (id, data, dispatch) => {
  dispatch(updateUserStart());
  try {
    await userRequest.put(`/user/${id}`, data);
    dispatch(updateUserSuccess(id, data));
  } catch (error) {
    console.log("unable to update user" + error);
    dispatch(updateUserSuccess());
  }
};

// get all jobs
export const getAllJobs = async (dispatch) => {
  dispatch(getJobsStart());
  try {
    const res = await userRequest.get("/jobs/allJobs");
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
    await userRequest.post(`/jobs`, jobs);
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
    await userRequest.delete(`/jobs/${id}`);
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
    await userRequest.put(`/jobs/${id}`, jobs);
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
    const res = await userRequest.get("/blog/allBlog");
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
    await userRequest.post(`/blog`, blogData);
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
    await userRequest.put(`/blog/${id}`, blogs);
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
    await userRequest.delete(`/blog/${id}`);
    dispatch(deleteBlogSuccess(id));
  } catch (error) {
    console.log("unable to delete Blog" + error);
    dispatch(deleteBlogFailure());
    console.log(error);
  }
};



// get all category
export const getAllCategory = async (dispatch) => {
  dispatch(getCategorysStart());
  try {
    const res = await userRequest.get("/category/allCategory");
    dispatch(getCategorysSuccess(res.data));
  } catch (error) {
    dispatch(getCategorysFailure());
    console.log(error);
  }
};

// create category
export const createCategory = async (blogData, dispatch) => {
  dispatch(createBlogStart());
  try {
    await userRequest.post(`/category`, blogData);
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
    await userRequest.put(`/category/${id}`, cat);
    dispatch(updateCategorysSuccess(id, cat));
    alert("updated");
  } catch (error) {
    console.log("unable to update category" + error);
    dispatch(updateCategorysFailure());
  }
};

// delete cat
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await userRequest.delete(`/category/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (error) {
    console.log("unable to delete category" + error);
    dispatch(deleteCategoryFailure());
    console.log(error);
  }
};
