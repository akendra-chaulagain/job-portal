import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // user reducer(for login)
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser =
        localStorage.setItem("accesToken", action.payload.token) ||
        localStorage.setItem("userId", action.payload.others._id) ||
        action.payload;
      state.error = false;
    },
    loginfailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // update user
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser[
        state.currentUser.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.user;
    },
    updateUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // logout user
    // update user
    logOutUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    logOutUserSuccess: (state) => {
      state.isFetching = false;
      state.currentUser =
        localStorage.removeItem("accesToken") ||
        localStorage.removeItem("userId");
    },
    logOutUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginfailure,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
  logOutUserFailure,
  logOutUserStart,
  logOutUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
