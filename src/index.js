import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

import App from "./components/App";

// render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("root")
// );

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <Router>
      <App />
    </Router>,
    rootElement
  );
} else {
  render(
    <Router>
      <App />
    </Router>,
    rootElement
  );
}
