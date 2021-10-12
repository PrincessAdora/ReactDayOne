import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="catraandglimmer.jpg" alt="catra kissing glimmer" />
        <h1>About Chris Hernandez</h1>
        <p>
          Call me Chris <br></br>
          Favorite quote:{" "}
          <i>
            "It's hard, keeping your heart open. It makes you vulnerable, but it
            doesn't make you weak...And I have to believe that it's worth it."
          </i>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
