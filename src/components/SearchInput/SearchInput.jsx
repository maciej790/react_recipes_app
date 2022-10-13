import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { BsSearch } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function SearchForm({ searchRecipes }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes(inputValue);
  };

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
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
