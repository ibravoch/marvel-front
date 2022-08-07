import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// import pages
import Home from "./components/pages/Home";
import Character from "./components/pages/Character";
import NotpageFound from "./components/pages/NotpageFound";
import Comics from "./components/pages/Comics";
import Favoris from "./components/pages/Favoris";

//import components
import Header from "./components/Header";

function App() {
  const [search, setSearch] = useState("");
  const [like, setLike] = useState([]);
  return (
    <Router>
      <Header search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              setSearch={setSearch}
              like={like}
              setLike={setLike}
            />
          }
        />
        <Route
          path="/comics/:characterId"
          element={<Character search={search} setSearch={setSearch} />}
        />
        <Route
          path="/comics"
          element={<Comics search={search} setSearch={setSearch} />}
        />
        <Route
          path="/favoris"
          element={<Favoris />}
          like={like}
          setLike={setLike}
        />
        <Route path="*" element={<NotpageFound />} />
      </Routes>
    </Router>
  );
}
export default App;
