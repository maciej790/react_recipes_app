import React, { useEffect } from "react";
import styles from "./Popular.module.scss";
import "@splidejs/splide/dist/css/splide.min.css";
import Slider from "./Slider/Slider";
import { useFetch } from "../../hooks/useFetch";

// eslint-disable-next-line no-undef
const url = `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`;

function Popular() {
  const { fetchData, data, isError, isLoading } = useFetch();

  useEffect(() => {
    fetchData(url);
  }, []);

  return (
    <section className={styles.popular}>
      <h2 className={styles.popularTitle}>Popular Recipes:</h2>
      <Slider recipes={data.recipes} isError={isError} isLoading={isLoading} />
    </section>
  );
}

export default Popular;
