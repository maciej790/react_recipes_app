import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { BsSearch } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function SearchForm({ handleResults }) {
  const [inputValue, setInputValue] = useState("");

  // eslint-disable-next-line no-undef
  const url = `https://jsonplaceholder.typicode.com/todos/${inputValue}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleResults(url);
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
