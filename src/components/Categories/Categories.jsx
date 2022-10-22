import React from "react";
import CategoryButtons from "./CategoryButtons/CategoryButtons";
import styles from "./Categories.module.scss";

// eslint-disable-next-line react/prop-types
function Categories({ handleSearch }) {
  return (
    <section className={styles.categories}>
      <h2>Popular categories:</h2>
      <CategoryButtons handleSearch={handleSearch} />
    </section>
  );
}

export default Categories;
