import { configureStore } from "@reduxjs/toolkit";
import hackathonReducer from "../features/hackathonSlice";

export const store = configureStore({
  reducer: {
    hackathons: hackathonReducer,
  },
});
