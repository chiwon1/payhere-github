import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchGithubIssues } from "../../api/github";

export const fetchIssues = createAsyncThunk("issue/fetchIssues", async ({ url, page }) => {
  const res = await searchGithubIssues(url, page);

  return { ...res, page };
});

export const issueSlice = createSlice({
  name: "issue",
  initialState: {
    page: 1,
    list: [],
    error: null,
    issuesLength: 0,
  },
  reducers: {},
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
  },
});

export default issueSlice.reducer;
