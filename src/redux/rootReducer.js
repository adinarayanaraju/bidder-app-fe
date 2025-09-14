import { combineReducers } from "redux";
import testSlice from "./slices/testSlice";
import authSlice from "./slices/authSlice";
const rootReducer = combineReducers({
  test: testSlice,
  auth: authSlice,
});

export default rootReducer;
