import movieReducer from "./MovieSlice";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});

export default store;
