import React from "react";
import styles from "../styles/MoviesGrid.module.css";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import { getMovies } from "../utils/getMovies";
import { useQuery } from "../hooks/useQuery";
import Spinner from "../custom/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const MoviesGrid = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    let searchUrl = search
      ? `/search/movie?query=${search}&page=${page}`
      : `/discover/movie?&page=${page}`;
    getMovies(searchUrl).then((data) => {
      setMovies((prevMovies) =>
        JSON.stringify(prevMovies) == JSON.stringify(data.results)
          ? [...data.results]
          : [...prevMovies, ...data.results]
      );
      setHasMore(data.page < data.total_pages);
    });
  }, [search, page]);

  return (
    <InfiniteScroll
      loader={<Spinner />}
      dataLength={movies.length}
      next={() => setPage((prev) => prev + 1)}
      hasMore={hasMore}
    >
      <ul className={styles.grid}>
        {movies.map((item) => (
          <MovieCard key={item.id} movie={item} />
        ))}
      </ul>
    </InfiniteScroll>
  );
};

export default MoviesGrid;
