import { useDispatch, useSelector } from "react-redux";
import "./style/global.scss";
import { useEffect } from "react";
import { fetchTestData } from "./redux/slices/testSlice";
import Signup from "./views/auth/Signup";
import Signin from "./views/auth/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./views/auth/ForgotPassword";
function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.test);
  console.log("data is", data);
  useEffect(() => {
    dispatch(fetchTestData());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/signin" element={<Signin />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
