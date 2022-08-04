import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import pages
import Home from "./components/pages/Home";
import Character from "./components/pages/Character";

//import components
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Router>
        <Header search={search} setSearch={setSearch} />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} setSearch={setSearch} />}
          />
          <Route path="/character/:characterId" element={<Character />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
