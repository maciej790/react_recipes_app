import React from "react";
import Categories from "../../components/Categories/Categories";
import Popular from "../../components/Popular/Popular.jsx";
import SearchInput from "../../components/SearchInput/SearchInput.jsx";
import styles from "./Home.module.scss";
import { useFetch } from "../../hooks/useFetch";

function Home() {
  const { fetchData, data } = useFetch();

  return (
    <main className={styles.home}>
      <h2>Find Your Recipe!</h2>
      <SearchInput fetchData={fetchData} />
      <Categories fetchData={fetchData} />
      <Popular />
      {data.results &&
        data.results.map((item) => <li key={item.id}>{item.title}</li>)}
    </main>
  );
}

export default Home;
