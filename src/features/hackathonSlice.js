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
  "addHackathon",
  async (data, { rejectWithValue }) => {
    const res = await axios.post(
      "https://66e011c12fb67ac16f282f45.mockapi.io/hackathon",
      data
    );
    try {
      // console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res?.data || error.message);
    }
  }
);

export const deleteHackathon = createAsyncThunk(
  "deleteHackathon",
  async (id, { rejectWithValue }) => {
    const res = await axios.delete(
      `https://66e011c12fb67ac16f282f45.mockapi.io/hackathon/${id}`
    );
    try {
      // console.log(res);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.res?.data || error.message);
    }
  }
);

export const editHackathon = createAsyncThunk(
  "editHackathon",
  async (data, { rejectWithValue }) => {
    const res = await axios.put(
      `https://66e011c12fb67ac16f282f45.mockapi.io/hackathon/${data.id}`,
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
    filteredHackathons: [],
    loading: false,
    error: null,
  },

  reducers: {
    setFilters(state, action) {
      // console.log(action.payload);
      const { search, level, status } = action.payload;

      state.filteredHackathons = state.hackathons
        .filter((hackathon) =>
          hackathon.name.toLowerCase().includes(search.toLowerCase())
        )
        .filter((hackathon) => (level ? hackathon.level === level : true))
        .filter((hackathon) => {
          if (status === "All") return true; // No filter applied if "All" is selected
          if (status === "Active") return hackathon.isActive; // Assuming "isActive" is a field
          if (status === "Upcoming")
            return new Date(hackathon.startDate) > new Date();
          if (status === "Past")
            return new Date(hackathon.endDate) < new Date();
          return true;
        });
    },
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
        state.filteredHackathons = action.payload;
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
      })
      .addCase(deleteHackathon.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteHackathon.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.loading = false;
        state.hackathons = state.hackathons.filter(
          (hackathon) => hackathon.id !== action.payload.id
        );
      })
      .addCase(deleteHackathon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(editHackathon.pending, (state) => {
        state.loading = true;
      })
      .addCase(editHackathon.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.hackathons.filter((hackathon) =>
          hackathon.id === action.payload.id ? action.payload : hackathon
        );
      })
      .addCase(editHackathon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setFilters } = hackathonSlice.actions;
export default hackathonSlice.reducer;
