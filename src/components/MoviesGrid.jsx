 
import styles from "../styles/MoviesGrid.module.css";
import MovieCard from "./MovieCard";


const MoviesGrid = ({movies}) => {
  
  return (
    <ul className={styles.grid}>
      {movies.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
