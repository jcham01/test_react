import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      <div class="container">
        <div>test 1</div>
        <div>test 2</div>
        <div>test 3</div>
        <div>test 4</div>
        <div>test 5</div>
        <div>test 6</div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
