import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./reducers/index";
import { UserContext } from "./components/login/login";
import token from "./components/login/login";
import cataeg from "./components/category/category";

ReactDOM.render(
  <Router>
    <UserContext.Provider value={(token,cataeg)}>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContext.Provider>
  </Router>,
  document.getElementById("root")
);
