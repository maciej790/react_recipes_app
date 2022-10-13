import React, { useState } from "react";
import clsx from "clsx";
import styles from "./Categories.module.scss";

// eslint-disable-next-line react/prop-types
function Categories({ searchRecipes }) {
  const [active, setActive] = useState(null);

  const categories = ["breakfast", "soup", "dessert", "fingerfood", "drink"];

  const handleButtonClick = (index) => {
    setActive(index);
    const category = categories[index];
    searchRecipes(category);
  };

  return (
    <section className={styles.categories}>
      <h2>Popular categories:</h2>
      <ul className={styles.categoriesBox}>
        {categories.map((category, index) => (
          <li key={index} className={styles.categoriesItem}>
            <button
              className={clsx(styles.categoriesButton, {
                [styles.active]: index === active,
              })}
              onClick={() => handleButtonClick(index)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
