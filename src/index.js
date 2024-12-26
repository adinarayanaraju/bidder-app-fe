import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
import { Provider } from "react-redux";
import store from "./redux/store";
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);
