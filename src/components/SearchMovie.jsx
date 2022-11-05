import styles from "../styles/SearchMovie.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const SearchMovie = () => {
  const searchValueRef = useRef();
  const history = useNavigate();

  const query = useQuery();
  const search = query.get("search");

  useEffect(() => {
    searchValueRef.current.value = search ? search : "";
  }, [search]);

  const handleSearchMovie = (e) => {
    e.preventDefault();
    let searchValue = searchValueRef.current.value.toLowerCase();
    history(`/?search=${searchValue}`);
  };

  return (
    <form onSubmit={(e) => handleSearchMovie(e)} className={styles.container}>
      <input
        ref={searchValueRef}
        className={styles.searchBar}
        type="text"
        placeholder="Search your movie..."
      />
      <button type="submit" className={styles.searchIcon}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
};

export default SearchMovie;
