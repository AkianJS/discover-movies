import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovies } from "../utils/getMovies";
import Spinner from "../custom/Spinner"
import styles from "../styles/MovieDetails.module.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    let isFinish = false;
    getMovies(`/movie/${id}`).then((data) => setMovie(data));
    if (isFinish) {
      return () => {
        isFinish = true;
      };
    }
  }, [id]);

  if (!movie) return <Spinner/> ;

  const genres = movie.genres.map((item) => {
    return item.name;
  });

  const image = "https://image.tmdb.org/t/p/w400" + movie.poster_path;

  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} alt={movie.original_title} />
      </div>
      <div className={styles.movieDetail}>
        <p>
          <b>Title:</b> {movie.original_title}
        </p>
        <p>
          <b>Genres: </b>
          {genres.join(", ")}
        </p>
        <p>
        <b>Description:</b> {movie.overview}
        </p>
        <p>
            <b>Rating: </b>{movie.vote_average.toFixed(2)}{" "}
            <FontAwesomeIcon icon={faStar} />
        </p>
      </div>
    </main>
  );
};

export default MovieDetails;
