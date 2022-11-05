import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import { useEffect, useState } from "react";
import { getMovies } from "../utils/getMovies";
import { useQuery } from "../hooks/useQuery"
import Spinner from "../custom/Spinner";

const Index = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    setIsLoading(true);
    let searchUrl = search
      ? `/search/movie?query=${search}`
      : `/discover/movie`;
    getMovies(searchUrl).then((data) => setMovies(data.results));
    setIsLoading(false);
  }, [search]);

  if (isLoading) {
    return <Spinner/>;
  }

  return <MoviesGrid movies={movies} />;
};

export default Index;
