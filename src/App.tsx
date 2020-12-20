import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import { RouterConfig } from "./navigation/RouterConfig";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <RouterConfig />
      </div>
    </Router>
  );
}

export default App;
