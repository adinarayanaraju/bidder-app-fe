import { useDispatch, useSelector } from "react-redux";
import "./style/global.scss";
import { useEffect } from "react";
import { fetchTestData } from "./redux/slices/testSlice";
import Signup from "./views/auth/Signup";
import Signin from "./views/auth/Signin";
function App() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.test);
  console.log("data is", data);
  useEffect(() => {
    dispatch(fetchTestData());
  }, []);
  return (
    <div>
      <Signup />
      <Signin />

    </div>
  );
}

export default App;
