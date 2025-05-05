import { combineReducers } from "redux";
import testSlice from "./slices/testSlice";
import auctionSlice  from "./slices/auctionSlice";
import authSlice, { logout } from "./slices/authSlice";
import userSlice  from "./slices/userSlice";

const appReducer = combineReducers({
  test: testSlice,
  auth: authSlice,
  auction: auctionSlice,
  user: userSlice
});

const rootReducer = (state, action) => {
  // clear all data in redux store while logout action type call
  if (action.type === logout.type) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
