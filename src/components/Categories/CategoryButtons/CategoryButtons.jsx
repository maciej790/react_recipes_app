import React from "react";
import clsx from "clsx";
import styles from "./CategoryButtons.module.scss";
import useActiveIndex from "./useActiveIndex";
import { categories } from "./categories";

// eslint-disable-next-line react/prop-types
function CategoryButtons({ handleSearch }) {
  const { changeActiveIndex, activeIndex } = useActiveIndex();

  return (
    <ul className={styles.categoriesBox}>
      {categories.map((category, index) => (
        <li key={index} className={styles.categoriesItem}>
          <button
            className={clsx(styles.categoriesButton, {
              [styles.active]: index === activeIndex,
            })}
            onClick={() => {
              changeActiveIndex(index);
              handleSearch(categories[index]);
            }}
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default CategoryButtons;
