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
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "./userReducer";

import { toast } from "react-toastify";

// success tostify
const tostifySuccess = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  progress: undefined,
};

// failure tostify
const tostifyFailure = {
  position: "bottom-right",
  autoClose: 3000,
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
    toast.success(" Profile successfully  updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update user" + error);
    dispatch(updateUserFailure());
    toast.error(" Login failed!", tostifyFailure);
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
    toast.success(" Job successfully  created!", tostifySuccess);
  } catch (error) {
    console.log("unable to create jobs" + error);
    dispatch(createJobFailure());
    console.log(error);
    toast.error(" Something went wrong! please try again!!", tostifyFailure);
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
    toast.error(" Unable to delete jobs!", tostifyFailure);
  }
};

// update jobs
export const updateProducts = async (id, jobs, dispatch) => {
  dispatch(updateJobsStart());
  try {
    await userRequest.put(`/jobs/${id}`, jobs);
    dispatch(updateJobsSuccess(id, jobs));
    toast.success(" Job updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update job" + error);
    dispatch(updateJobsFailure());
    toast.error(" Something went wrong! please try again!! ", tostifyFailure);
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
    toast.success(" Category successfully  created!", tostifySuccess);
  } catch (error) {
    console.log("unable to create blog" + error);
    dispatch(createBlogFailure());
    console.log(error);
    toast.error(" Something went wrong! please try again!! ", tostifyFailure);
  }
};

// update category
export const updateCategory = async (id, cat, dispatch) => {
  dispatch(updateCategorysStart());
  try {
    await userRequest.put(`/category/${id}`, cat);
    dispatch(updateCategorysSuccess(id, cat));
    toast.success(" Category successfully  updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update category" + error);
    dispatch(updateCategorysFailure());
    toast.error(" Something went wrong! please try again!! ", tostifyFailure);
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
