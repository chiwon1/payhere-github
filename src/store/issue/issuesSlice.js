import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchBookmarkIssues, searchGithubIssues } from "../../api/github";

export const fetchIssues = createAsyncThunk("issue/fetchIssues", async ({ url, page }) => {
  const res = await searchGithubIssues(url, page);

  return { ...res, page };
});

export const fetchBookmarkIssues = createAsyncThunk(
  "issue/fetchBookmarkIssues",
  async ({ url, page }) => {
    const res = await searchBookmarkIssues(url, page);

    return { ...res, page };
  }
);

export const issuesSlice = createSlice({
  name: "issue",
  initialState: {
    page: 1,
    list: [],
    error: null,
    issuesLength: 0,
  },
  reducers: {
    resetState: (state) => {
      state.error = null;
      state.page = 1;
      state.issuesLength = 0;
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIssues.fulfilled, (state, action) => {
        const data = action.payload;

        state.error = null;
        state.list = data.items;
        state.page = data.page;
        state.issuesLength = data.total_count;
      })
      .addCase(fetchIssues.rejected, (state, action) => {
        state.error = action.error;
      });
    builder.addCase(fetchBookmarkIssues.fulfilled, (state, action) => {
      const data = action.payload;

      state.error = null;
      state.list = data.items;
      state.page = data.page;
      state.issuesLength = data.total_count;
    });
  },
});

export const { resetState } = issuesSlice.actions;

export default issuesSlice.reducer;
