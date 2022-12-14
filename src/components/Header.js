import marvel from "../assets/marvel.svg";
import { useNavigate } from "react-router-dom";
const Header = ({ search, setSearch }) => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        alt="logo"
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
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Personnages
          </li>
          <li
            onClick={() => {
              navigate("/comics");
            }}
          >
            Comics
          </li>
          <li
            onClick={() => {
              navigate("/favoris");
            }}
          >
            Favoris
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
