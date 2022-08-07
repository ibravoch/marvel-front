import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = ({ search, setSearch }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-nodeback.herokuapp.com/comics/${characterId}`
      );

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [characterId]);

  return isLoading === true ? (
    <h1 className="loading">En cours de chargement</h1>
  ) : (
    <div className="main">
      {data.comics
        .filter((filtre) =>
          filtre.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((elem, index) => {
          return (
            <div key={index} className="fiche">
              <img
                alt="image-photo"
                src={elem.thumbnail.path + "." + elem.thumbnail.extension}
              />
              <h3> {elem.title}</h3>
              <p>{elem.description} </p>
            </div>
          );
        })}
    </div>
  );
};

export default Character;
