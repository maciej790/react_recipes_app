import React from "react";
import { Link } from "react-router-dom";
import styles from "./Welcome.module.scss";

function Welcome() {
  return (
    <main className={styles.welcome}>
      <section className={styles.text}>
        <h1 className={styles.textTitle}>Cooking Experience Like a Chef!</h1>
        <p className={styles.textDescription}>
          Lets make a delicious dish with the best recipe for the family
        </p>
        <Link to="/home">
          <button className={styles.textButton}>Lets Go!</button>
        </Link>
      </section>
    </main>
  );
}

export default Welcome;
