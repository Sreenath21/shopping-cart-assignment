import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchBannerData } from "./bannerApi";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const fetchBanners = createAsyncThunk(
  "banner/fetchBannerData",
  async () => {
    const response = await fetchBannerData();
    return response;
  }
);

// export const fetchBanners = createAsyncThunk(
//   "banner/fetchBannerData",
//   async () => {
//     const { data } = await axios.get("http://localhost:8080/banners");
//     return data;
//   }
// );

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  // reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanners.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchBanners.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(fetchBanners.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export default bannerSlice.reducer;
