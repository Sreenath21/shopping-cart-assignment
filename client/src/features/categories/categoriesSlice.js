import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesData } from "./categoriesApi";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const data = await fetchCategoriesData();
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });

    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
