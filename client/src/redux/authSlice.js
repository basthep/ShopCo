import { createSlice } from "@reduxjs/toolkit";


const token = localStorage.getItem("token");


const initialState = {

  token: token || null,

  isLoggedIn: !!token,

};


const authSlice = createSlice({

  name: "auth",

  initialState,

  reducers: {


    loginSuccess: (state, action) => {

      state.token = action.payload.token;

      state.isLoggedIn = true;

    },


    logout: (state) => {

      state.token = null;

      state.isLoggedIn = false;

      localStorage.removeItem("token");

      localStorage.removeItem("remember");

    },

  },

});


export const {
  loginSuccess,
  logout,
} = authSlice.actions;


export default authSlice.reducer;