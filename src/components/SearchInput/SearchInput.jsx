import React from "react";
import styles from "./SearchInput.module.scss";
import { BsSearch } from "react-icons/bs";
import { useForm } from "react-hook-form";

// eslint-disable-next-line react/prop-types
function SearchInput({ fetchData }) {
  const handleFormSubmit = (search) => {
    // eslint-disable-next-line no-undef
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&number=30&query=${search.search}`;
    fetchData(url);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className={styles.search} onSubmit={handleSubmit(handleFormSubmit)}>
      <label className={styles.searchIcon} htmlFor="search">
        <BsSearch />
      </label>
      <input
        {...register("search", { required: true })}
        className={styles.searchInput}
        type="text"
        placeholder="Search Your Dish"
        name="search"
      />
      {errors.search && (
        <p className={styles.searchRequired}>This field is required</p>
      )}
    </form>
  );
}

export default SearchInput;
