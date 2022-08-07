import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ search, setSearch, like, setLike }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(0);

  //const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-nodeback.herokuapp.com/characters?limit=100&skip=${page}`
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return isLoading === true ? (
    <h1>En cours de chargement</h1>
  ) : (
    <div>
      <div>
        <p>{like}</p>
      </div>
      <h2>Voici les {data.count} personnages marvel</h2>

      <div className="main">
        {data.results
          .filter((filtre) =>
            filtre.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((character, index) => {
            return (
              <section className="fiche" key={index}>
                <img
                  alt="personnage"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
                <Link to={`/comics/${character._id}`}>
                  <h3>{character.name}</h3>
                </Link>
                <p>{character.description}</p>
                <div className="position">
                  <button
                    onClick={() => {
                      const newLike = [...like];
                      newLike.push(character.name);
                      setLike(newLike);
                    }}
                  >
                    +
                  </button>
                </div>
              </section>
            );
          })}
      </div>
      <div className="page">
        <button
          disabled={page <= 0 ? true : false}
          onClick={() => {
            setPage(page - 1);
          }}
        >
          page précédente
        </button>
        <p>{page}</p>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          page suivante
        </button>
      </div>
    </div>
  );
};
export default Home;
