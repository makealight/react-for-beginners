import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, poster_path, overview, genre_ids }) {
  return (
    <div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <img src={`https://wsrv.nl/?url=${poster_path}`} alt={title} />
      <p>{overview}</p>
      <ul>
        {genre_ids.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
