import React, { useEffect, useState } from "react";
import "../App.css";

const DefaultList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=f43ec82a5f24fe6190891894b7436c7a",
        {
          headers: {
            "Content-type": "application/json",
          },
          method: "GET",
        }
      );

      if (response.ok) {
        const data = await response.json();
        setMovies(data.results);
      } else {
        console.error("Failed to fetch movies.");
      }
    } catch (error) {
      console.error("An error occurred while fetching movies:", error);
    }
  }

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
              <p className="movie-overview">Plot : {movie.overview}</p>
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

export default DefaultList;
