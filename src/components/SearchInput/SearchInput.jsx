import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { BsSearch } from "react-icons/bs";
import { useFetch } from "../../hooks/useFetch";

// eslint-disable-next-line react/prop-types
function SearchForm({ handleResults }) {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line no-undef
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&number=30&query=${inputValue}`;

  const { data } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResults(data);
  };

  return (
    <form className={styles.search} onSubmit={(e) => handleSubmit(e)}>
      <label className={styles.searchIcon} htmlFor="search">
        <BsSearch />
      </label>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search Your Dish"
        name="search"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
