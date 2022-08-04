import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ search, setSearch }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://marvel-nodeback.herokuapp.com/"
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <h1>En cours de chargement</h1>
  ) : (
    <div className="main">
      {data.results
        .filter((filtre) =>
          filtre.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((character, index) => {
          return (
            <Link to={`/character/${character._id}`}>
              <section className="fiche" key={index}>
                <p> {character.name} </p>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                />
                <p> {character.description} </p>
              </section>
            </Link>
          );
        })}
    </div>
  );
};
export default Home;
