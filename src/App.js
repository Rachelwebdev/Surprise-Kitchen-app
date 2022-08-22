import React from "react";
import Logo from "./logo.svg";
import "./App.css";
import SurprisePage from "./surprise";
import DetailedPage from "./detailedAPI-content";

function App() {
  return (
    <div className="App">
      <SurprisePage />
      <DetailedPage />
    </div>
  );
}

export default App;
