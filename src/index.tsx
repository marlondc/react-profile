import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import Profile from "./components/Profile";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div className="container">
      <Route exact path="/" component={App} />
      <Route exact path="/profile" component={Profile} />
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
