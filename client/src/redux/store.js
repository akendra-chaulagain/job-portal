import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";
import jobsReducer from "./jobsReducer";
import categoryReducer from "./categoryReducer";

export default configureStore({
  reducer: {
    blog: blogReducer,
    job: jobsReducer,
    category: categoryReducer,
  },
});
