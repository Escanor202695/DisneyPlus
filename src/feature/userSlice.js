import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserlogin: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setUserSignOut: (state, action) => {
      state.name = null;
      state.email = null;
      state.email = null;
    },
  },
});

export const { setUserlogin, setUserSignOut } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export default userSlice.reducer;
