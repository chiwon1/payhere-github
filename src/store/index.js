import { configureStore } from "@reduxjs/toolkit";

import issuesReducer from "./issue/issuesSlice";

export default configureStore({
  reducer: {
    issue: issuesReducer,
  },
});
