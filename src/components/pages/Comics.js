import { useState, useEffect } from "react";
import axios from "axios";

const Comics = ({ search, setSearch }) => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://marvel-nodeback.herokuapp.com/comics?limit=100&skip=${page}`
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
      <div className="main">
        {data.results
          .filter((filtre) =>
            filtre.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((elem, index) => {
            return (
              <div className="fiche" key={index}>
                <img
                  alt="comics"
                  src={elem.thumbnail.path + "." + elem.thumbnail.extension}
                />{" "}
                <h3>{elem.title}</h3>
                <p>{elem.description}... </p>
                <div className="position">
                  <p>+</p>
                </div>
              </div>
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
          Page précédente
        </button>
        {page}
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Page suivante
        </button>
      </div>
    </div>
  );
};

export default Comics;
