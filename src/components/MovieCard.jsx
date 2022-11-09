import styles from "../styles/MoviesCard.module.css";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const image = "https://image.tmdb.org/t/p/w200/" + movie.poster_path;
  console.log(movie)
  return (
    <li className={styles.container}>
      <Link to={"/movie/" + movie.id}>
        <img
          className={styles.image}
          width={232}
          height={300}
          src={image}
          alt="No image"
        />
        <p>{movie.title}</p>
      </Link>
    </li>
  );
};

export default MovieCard;
