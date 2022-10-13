import React from "react";
import Categories from "../../components/Categories/Categories";
import SearchInput from "../../components/SearchInput/SearchInput";
import styles from "./Home.module.scss";

function Home() {
  const searchRecipes = (value) => {
    console.log(value);
  };
  return (
    <main className={styles.home}>
      <h2>Find Your Recipe!</h2>
      <SearchInput searchRecipes={searchRecipes} />
      <Categories searchRecipes={searchRecipes} />
    </main>
  );
}

export default Home;
