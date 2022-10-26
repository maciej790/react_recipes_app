import React from "react";
import Categories from "../../components/Categories/Categories";
import Popular from "../../components/Popular/Popular";
import SearchInput from "../../components/SearchInput/SearchInput";
import styles from "./Home.module.scss";
import { useResults } from "../../hooks/useResults";

function Home() {
  const { handleResults, results } = useResults();

  console.log(results);

  return (
    <main className={styles.home}>
      <h2>Find Your Recipe!</h2>
      <SearchInput handleResults={handleResults} />
      <Categories />
      <Popular />
    </main>
  );
}

export default Home;
