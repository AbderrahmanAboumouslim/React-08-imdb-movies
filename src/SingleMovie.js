import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch } from "./useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { loading, fail, data: movie } = useFetch(`&i=${id}`);

  if (loading) {
    return <div className="loading"></div>;
  }

  if (fail.show) {
    return (
      <div className="page-fail">
        <h2>{fail.message}</h2>
        <Link to="/" className="btn">
          Back home
        </Link>
      </div>
    );
  }

  const { Title: title, Plot: plot, Poster: poster, Year: year } = movie;

  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
