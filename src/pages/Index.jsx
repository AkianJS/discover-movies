import React from "react";
import MoviesGrid from "../components/MoviesGrid";
import { useQuery } from "../hooks/useQuery";

const Index = () => {
  const query = useQuery();
  const search = query.get("search");

  return <MoviesGrid key={search}/>;
};

export default Index;
