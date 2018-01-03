import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import store from "./stores";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
