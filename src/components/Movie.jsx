import React from "react";
import "../App.css";

const Movie = (props) => {
  const { movies } = props;

  return (
    <div className="MovieList">
      {movies.map((movie) => {
        return (
          <div className="movie" key={movie.id}>
            <div className="image-container">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </div>

            <div className="movie-details">
              <h1 className="movie-title">{movie.title}</h1>
              <p className="movie-overview">{movie.overview}</p>
              <p className="movie-release-date">
                Release Date: {movie.release_date}
              </p>
              <p className="movie-rating">Rating: {movie.vote_average}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
