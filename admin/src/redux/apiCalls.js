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
  createCategoryFailure,
  createCategoryStart,
  createCategorySuccess,
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
import axios from "axios";

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
    const res = await axios.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    toast.success(" Login success!", tostifySuccess);
    // auto logout whwn token is expired
    setTimeout(() => {
      localStorage.clear();
      window.location.reload("/");
      toast.error(" Token Expired! Login Again", tostifyFailure);
    }, 1000 * 60 * 5);
  } catch (error) {
    dispatch(loginfailure());
    console.log(error);
    toast.error(" Something went wrong. please try again!", tostifyFailure);
  }
};

// update profile
export const updateProfile = async (id, data, dispatch) => {
  dispatch(updateUserStart());
  try {
    await axios.put(`/user/${id}`, data);
    dispatch(updateUserSuccess(id, data));
    toast.success(" Profile successfully  updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update user" + error);
    dispatch(updateUserFailure());
    // toast.error(" Something went wrong. please try again!", tostifyFailure);
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
    toast.success(" Job successfully  created!", tostifySuccess);
  } catch (error) {
    console.log("unable to create jobs" + error);
    dispatch(createJobFailure());
    console.log(error);
    toast.error(" Something went wrong. please try again!!", tostifyFailure);
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
    toast.error(" Something went wrong. please try again!", tostifyFailure);
  }
};

// update jobs
export const updateJobs = async (id, jobs, dispatch) => {
  dispatch(updateJobsStart());
  try {
    await axios.put(`/jobs/${id}`, jobs);
    dispatch(updateJobsSuccess(id, jobs));
    toast.success(" Job successfull updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update job" + error);
    dispatch(updateJobsFailure());
    toast.error(" Something went wrong. please try again!! ", tostifyFailure);
  }
};

// get all category
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

// create category
export const createCategory = async (blogData, dispatch) => {
  dispatch(createCategoryStart());
  try {
    await axios.post(`/category`, blogData);
    dispatch(createCategorySuccess(blogData.data));
    toast.success(" Category successfully  created!", tostifySuccess);
  } catch (error) {
    console.log("unable to create blog" + error);
    dispatch(createCategoryFailure());
    console.log(error);
    toast.error(" Something went wrong! please try again! ", tostifyFailure);
  }
};

// update category
export const updateCategory = async (id, cat, dispatch) => {
  dispatch(updateCategorysStart());
  try {
    await axios.put(`/category/${id}`, cat);
    dispatch(updateCategorysSuccess(id, cat));
    toast.success(" Category successfully  updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update category" + error);
    dispatch(updateCategorysFailure());
    toast.error(" Something went wrong! please try again! ", tostifyFailure);
  }
};

// delete cat
export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    await axios.delete(`/category/${id}`);
    dispatch(deleteCategorySuccess(id));
    toast.success(" Category  successfully  deleted!", tostifySuccess);
  } catch (error) {
    console.log("unable to delete category" + error);
    dispatch(deleteCategoryFailure());
    console.log(error);
    toast.error(" Something went wrong! please try again! ", tostifyFailure);
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
    toast.success(" Blog successfully  created!", tostifySuccess);
  } catch (error) {
    console.log("unable to create blog" + error);
    dispatch(createBlogFailure());
    console.log(error);
    toast.error(" Something went wrong! please try again! ", tostifyFailure);
  }
};

// update blogs
export const updateBlog = async (id, blogs, dispatch) => {
  dispatch(updateBlogsStart());
  try {
    await axios.put(`/blog/${id}`, blogs);
    dispatch(updateBlogsSuccess(id, blogs));
    toast.success(" Blog successfully  updated!", tostifySuccess);
  } catch (error) {
    console.log("unable to update blog" + error);
    dispatch(updateBlogsFailure());
    toast.error(" Something went wrong! please try again! ", tostifyFailure);
  }
};
// delete blog
export const deleteBlog = async (id, dispatch) => {
  dispatch(deleteBlogStart());
  try {
    await axios.delete(`/blog/${id}`);
    dispatch(deleteBlogSuccess(id));
  } catch (error) {
    console.log("unable to delete Blog" + error);
    dispatch(deleteBlogFailure());
    console.log(error);
    toast.error(" Something went wrong! please try again! ", tostifyFailure);
  }
};
