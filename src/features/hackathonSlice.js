import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchHackathon = createAsyncThunk(
  "fetchHackathon",
  async (args, { rejectWithValue }) => {
    const res = await axios.get(
      "https://66e011c12fb67ac16f282f45.mockapi.io/hackathon"
    );
    try {
      // console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res?.data || error.message);
    }
  }
);

export const addHackathon = createAsyncThunk(
  "fetchHackathon",
  async (data, { rejectWithValue }) => {
    const res = await axios.get(
      "https://66e011c12fb67ac16f282f45.mockapi.io/hackathon",
      data
    );
    try {
      console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res?.data || error.message);
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
        // console.log(action.payload);
        state.loading = false;
        state.hackathons = action.payload;
      })
      .addCase(fetchHackathon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addHackathon.pending, (state) => {
        state.loading = true;
      })
      .addCase(addHackathon.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.loading = false;
        state.hackathons.push(action.payload);
      })
      .addCase(addHackathon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default hackathonSlice.reducer;
