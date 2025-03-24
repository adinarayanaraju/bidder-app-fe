import { combineReducers } from "redux";
import testSlice from "./slices/testSlice";
import authSlice, { logout } from "./slices/authSlice";
const appReducer = combineReducers({
  test: testSlice,
  auth: authSlice,
});

const rootReducer = (state, action) => {
  // clear all data in redux store while logout action type call
  if (action.type === logout.type) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
