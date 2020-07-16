import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./Form";
import axios from "axios";

function List() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://u120p3poi0.execute-api.ap-northeast-2.amazonaws.com/dev/test"
      )
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map((item) => (
            <span>{item.name}</span>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default List;
