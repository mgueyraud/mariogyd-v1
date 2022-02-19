import React from "react";
import styles from "@styles/components/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;
