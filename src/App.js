import "./App.css";
import { Routes, Route } from "react-router-dom";
import Surprise from "./Components/surprise";
import Details from "./Components/detailedAPI-content";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Surprise />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
