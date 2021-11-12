import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import issueReducer from "./issueReducer";

export default configureStore({
  reducer: {
    issues: issueReducer,
  },
  middleware: [logger],
});
