import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./form";
import List from "./List";

export default () => (
  <Router>
    <Route path="/add" component={Form} />
    <Route path="/" exact component={List} />
  </Router>
);
