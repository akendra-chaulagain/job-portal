import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";
import jobsReducer from "./jobsReducer";

export default configureStore({
  reducer: {
    blog: blogReducer,
    job: jobsReducer,
  },
});
