import { getBlogsFailure, getBlogsStart, getBlogsSuccess } from "./blogReducer";
import axios from "axios";
import { getJobsFailure, getJobsStart, getJobsSuccess } from "./jobsReducer";

// get all blogs
export const getAllBlogs = async (dispatch) => {
  dispatch(getBlogsStart());
  try {
    const res = await axios.get("/blog/allBlog");
    dispatch(getBlogsSuccess(res.data));
  } catch (error) {
    dispatch(getBlogsFailure());
    console.log(error);
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
