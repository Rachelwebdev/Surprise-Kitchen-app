import "./App.css";
import { Routes, Route } from "react-router-dom";
import Surprise from "./Components/surprise";
import Details from "./Components/detailedAPI-content";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Surprise />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
