import { createSlice } from "@reduxjs/toolkit";

export const issueSlice = createSlice({
  name: "issues",
  initialState: {
    list: [],
    page: 0,
  },
  reducers: {
    setIssues: (state, action) => {
      state.list = action.payload;
    },
    setPage: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setIssues, setPage } = issueSlice.actions;

export default issueSlice.reducer;
