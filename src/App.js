import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./component/Form";
import List from "./component/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/" component={List} />
          <Route path="/add" component={Form} />
          <Link to="/">Main</Link>
          <Link to="/add">Add Branch</Link>
        </Router>
      </header>
    </div>
  );
}

export default App;
