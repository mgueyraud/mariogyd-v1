import React from "react";
import styles from "@styles/components/Title.module.css";
import degrade_circle from "@assets/img/icons/degrade_circle.svg";
import Image from "next/image";

type TitleProps = {
  children: string;
};

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div className={styles.title__container}>
      <div className={styles.title__image}>
        <Image src={degrade_circle} alt="Degrade Circle Section Title" />
      </div>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
};

export default Title;
