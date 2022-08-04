import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/character/${id}`);

      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading === true ? (
    <h1 className="loading">En cours de chargement</h1>
  ) : (
    <div>
      <p> {data.name}</p>
    </div>
  );
};

export default Character;
