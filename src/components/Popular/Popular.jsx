import React from "react";
import styles from "./Popular.module.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import { useQuery } from "@tanstack/react-query";
import Slider from "./Slider/Slider";

// eslint-disable-next-line no-undef
const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`;

function Popular() {
  const { isLoading, error, data } = useQuery(["recipes"], async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

  return (
    <section className={styles.popular}>
      <h2 className={styles.popularTitle}>Popular Recipes:</h2>
      <Slider recipes={data?.recipes} error={error} isLoading={isLoading} />
    </section>
  );
}

export default Popular;
