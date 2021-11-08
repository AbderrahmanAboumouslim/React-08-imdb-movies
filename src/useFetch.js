import { useState, useEffect } from "react";
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=b8edffb`;
export const useFetch = (specialUrl) => {
  const [loading, setLoading] = useState(true);
  const [fail, setFail] = useState({ show: false, message: "" });
  const [data, setData] = useState(null);
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setData(data.Search || data);
        setFail({ show: false, message: "" });
      } else {
        setFail({ show: true, message: data.Error });
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${specialUrl}`);
  }, [specialUrl]);

  return { data, loading, fail };
};
