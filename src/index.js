import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from './redux/counter/store';
import contactsStore from "./redux/contacts/contacts-store";
import { App } from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={contactsStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
