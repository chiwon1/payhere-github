import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import issueReducer from "./reducer";

export default configureStore({
  reducer: {
    issues: issueReducer,
  },
  middleware: [logger],
});
