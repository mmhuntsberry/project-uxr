import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { browserHistory } from "react-router";

import "./index.scss";

import App from "./components/App";

render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.getElementById("root")
);
