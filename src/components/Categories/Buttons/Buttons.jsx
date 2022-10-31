import React from "react";
import styles from "./Buttons.module.scss";
import clsx from "clsx";
import useActiveIndex from "./useActiveIndex";
import { categories } from "./categories";

function Buttons({ fetchData }) {
  const { changeActiveIndex, activeIndex } = useActiveIndex();

  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&number=30&type=${categories[activeIndex]}`;

  return (
    <div className={styles.buttons}>
      {categories.map((category, index) => (
        <button
          key={index}
          className={clsx(styles.buttonsItem, {
            [styles.active]: index === activeIndex,
          })}
          onClick={() => {
            changeActiveIndex(index);
            fetchData(url);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
