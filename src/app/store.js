import { configureStore } from "@reduxjs/toolkit";
import hackathonReducer from "../features/hackathonSlice";

export const store = configureStore({
  // Define the reducer for managing hackathon-related state, mapping the 'hackathons' slice to the 'hackathonReducer'
  reducer: {
    hackathons: hackathonReducer,
  },
});
