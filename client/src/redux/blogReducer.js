import { createSlice } from "@reduxjs/toolkit";

export const BlogsSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // get all Blogs
    getBlogsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getBlogsSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs = action.payload;
    },
    getBlogsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const { getBlogsFailure, getBlogsStart, getBlogsSuccess } =
  BlogsSlice.actions;

export default BlogsSlice.reducer;
