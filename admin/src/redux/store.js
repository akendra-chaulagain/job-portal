import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobsReducer";
import userReducer from "./userReducer";
import blogReducer from "./blogReducer";
import categoryReducer from "./categoryReducer";

export default configureStore({
  reducer: {
    jobs: jobsReducer,
    user: userReducer,
    blog: blogReducer,
    category: categoryReducer,
  },
});
