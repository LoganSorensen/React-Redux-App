import React from "react";
import Pokemon from "./components/pokemon";
import "./App.css";
import './App.scss'

function App() {
  return (
    <div className="App">
      <h2>Search the PokéAPI</h2>
      <Pokemon />
    </div>
  );
}

export default App;
