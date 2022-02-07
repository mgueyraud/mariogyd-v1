import React from "react";
import styles from "@styles/components/Project.module.css";
import Image from "next/image";
import { Button, GradientImage } from "@components";

type ProjectProps = {
  is: "even" | "odd";
  title: string;
  number: string;
  languages: string[];
  description: string;
  cta: string;
  imageSource: string | StaticImageData;
};

const Project: React.FC<ProjectProps> = ({
  is,
  title,
  imageSource,
  number,
  languages,
  description,
  cta,
}) => {
  const image = (
    <div
      className={`${styles.project__image} ${
        is === "odd" ? styles.project__right_aligned : ""
      }`}
    >
      <GradientImage src={imageSource} />
    </div>
  );

  const content = (
    <div
      className={`${styles.project__content} ${
        is === "even" ? styles.project__right_aligned : ""
      }`}
    >
      <div className={styles.project__number}>{number}</div>
      <p className={styles.project__featured}>Featured Project</p>
      <h1>{title}</h1>
      <p className={styles.project__languages}>
        Languages: <span>{languages.join(", ")}</span>
      </p>
      <p className={styles.project__description}>{description}</p>
      <Button href={cta} target="_blank">
        See Project
      </Button>
    </div>
  );

  return (
    <div className={styles.project}>
      {is === "even" ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
};

export default Project;
