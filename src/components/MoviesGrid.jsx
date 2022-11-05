import { useEffect, useState } from "react";
import { getMovies } from "../utils/getMovies";
import { useQuery } from "../hooks/useQuery"
import styles from "../styles/MoviesGrid.module.css";
import MovieCard from "./MovieCard";
import Spinner from "../custom/Spinner";


const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery()
  const search = query.get("search")

  useEffect(() => {
    setIsLoading(true)
    let searchUrl = search ? `/search/movie?query=${search}` : `/discover/movie`
    getMovies(searchUrl).then((data) => setMovies(data.results));
    setIsLoading(false);
  }, [search]);

  if (isLoading) {
    return <Spinner/>;
  }
  
  return (
    <ul className={styles.grid}>
      {movies.map((item) => (
        <MovieCard key={item.id} movie={item} />
      ))}
    </ul>
  );
};

export default MoviesGrid;
