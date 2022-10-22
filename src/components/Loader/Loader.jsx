import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./Loader.module.scss";

function Loader() {
  return (
    <div className={styles.loader}>
      <AiOutlineLoading3Quarters className={styles.icon} />
    </div>
  );
}

export default Loader;
