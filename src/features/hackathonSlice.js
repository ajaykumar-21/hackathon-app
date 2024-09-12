import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHackathon = createAsyncThunk(
  "fetchHackathon",
  async (args, { rejectWithValue }) => {
    const res = await axios.get(
      "https://66e011c12fb67ac16f282f45.mockapi.io/hackathon"
    );
    try {
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const hackathonSlice = createSlice({
  name: "hackathons",
  initialState: {
    hackathons: [],
    loading: false,
    error: null,
  },

  extraReducers: (builer) => {
    builer
      .addCase(fetchHackathon.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHackathon.fulfilled, (state, action) => {
        state.loading = false;
        state.hackathons = action.payload;
      })
      .addCase(fetchHackathon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hackathonSlice.reducer;
