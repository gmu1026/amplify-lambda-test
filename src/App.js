import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  fetch("https://u120p3poi0.execute-api.ap-northeast-2.amazonaws.com/dev/test")
    .then((response) => response.json())
    .then((response) => {
      setItems(response);
    });

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
