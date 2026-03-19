import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

const GENRE_MAP = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Sci-Fi",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (await fetch(API_URL)).json();
    setMovies(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={
                movie.release_date ? movie.release_date.split("-")[0] : "N/A"
              }
              coverImg={movie.poster_path}
              title={movie.title}
              summary={movie.overview}
              genres={
                movie.genre_ids
                  ? movie.genre_ids.map((id) => GENRE_MAP[id])
                  : []
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
