import React from "react";
import styles from "./Categories.module.scss";
import Buttons from "./Buttons/Buttons";

function Categories({ fetchData }) {
  return (
    <section className={styles.categories}>
      <h2>Popular categories:</h2>
      <Buttons fetchData={fetchData} />
    </section>
  );
}

export default Categories;
