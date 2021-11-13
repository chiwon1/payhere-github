import { configureStore } from "@reduxjs/toolkit";

import issueReducer from "./issue/issueSlice";

export default configureStore({
  reducer: {
    issue: issueReducer,
  },
});
