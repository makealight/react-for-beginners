import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(API_URL);
    const json = await response.json();
    setMovies(json);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
              genre_ids={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
