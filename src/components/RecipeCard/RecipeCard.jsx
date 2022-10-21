import React from "react";
import styles from "./RecipeCard.module.scss";

// eslint-disable-next-line react/prop-types
function RecipeCard({ title, image, ready }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt={title} />
      <div className={styles.cardDescription}>
        <p className={styles.cardTitle}>{title}</p>
        {ready && <p className={styles.cardInfo}>Done in {ready} minutes</p>}
      </div>
    </div>
  );
}

export default RecipeCard;
