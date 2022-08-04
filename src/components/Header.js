import marvel from "../assets/marvel.svg";
import { useNavigate } from "react-router-dom";
const Header = ({ search, setSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        src={marvel}
        onClick={() => {
          navigate("/");
        }}
      />
      <input
        type="search"
        value={search}
        placeholder="Rechercher un acteur ou un comics"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <nav>
        <ul>
          <li>Personnages</li>
          <li>Comics</li>
          <li>Favoris</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
