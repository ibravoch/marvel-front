import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import pages
import Characters from "./components/pages/Characters";
import Character from "./components/pages/Character";
import NotpageFound from "./components/pages/NotpageFound";
import Comics from "./components/pages/Comics";

//import components
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/characters"
          element={<Characters search={search} setSearch={setSearch} />}
        />
        <Route
          path="/comics/:characterId"
          element={<Character search={search} setSearch={setSearch} />}
        />
        <Route
          path="/comics"
          element={<Comics search={search} setSearch={setSearch} />}
        />

        <Route path="*" element={<NotpageFound />} />
      </Routes>
    </Router>
  );
}
export default App;
