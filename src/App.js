import { useDispatch, useSelector } from "react-redux";
import "./style/global.scss";
import { useEffect } from "react";
import { fetchTestData } from "./redux/slices/testSlice";
import Signup from "./views/auth/Signup";
import Signin from "./views/auth/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./views/auth/ForgotPassword";
import VerifyAccount from "./views/auth/VerifyAccount";
import ResetPassword from "./views/auth/ResetPassword";
import { routeConstants } from "./utils/routeConstant";
import Header from "./views/header/Header";
import Home from "./views/home/Home";
import AuctionDetails from "./views/auctionDetails/AuctionDetails";
import CreateAuction from "./views/createAuction/CreateAuction";
import ProtectedRoute from "./ProtectedRoute";
import AuctionList from "./views/auctionList/AuctionList";
import UserProfile from "./views/userProfile/UserProfile";
import UpdateAuction from "./views/createAuction/UpdateAuction";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={routeConstants.HOME_PAGE} element={<Home />} />
          <Route path={routeConstants.SIGN_UP} element={<Signup />} />
          <Route path={routeConstants.SIGN_IN} element={<Signin />} />
          <Route
            path={routeConstants.FORGOT_PASSWORD}
            element={<ForgotPassword />}
          />
          <Route
            path={routeConstants.VERIFY_ACCOUNT}
            element={<VerifyAccount />}
          />
          <Route
            path={routeConstants.RESET_PASSWORD}
            element={<ResetPassword />}
          />
          <Route
            path={`${routeConstants.AUCTION_DETAIL}/:auction_id`}
            element={<AuctionDetails />}
          />
          <Route
            path={`${routeConstants.AUCTION_LIST}`}
            element={<AuctionList />}
          />

          <Route path={routeConstants.USER_PROFILE} element={<UserProfile />} />
          <Route
            path={`${routeConstants.AUCTION_UPDATE}/:auction_id`}
            element={<UpdateAuction />}
          />
          {/* Protected routes */}
          <Route
            element={<ProtectedRoute allowedRoles={["admin", "super-admin"]} />}
          >
            <Route
              path={routeConstants.AUCTION_CREATE}
              element={<CreateAuction />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
