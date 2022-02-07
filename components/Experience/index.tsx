import React from "react";
import styles from "@styles/components/Experience.module.css";

type ExperienceProps = {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  start,
  end,
  description,
}) => {
  return (
    <div className={styles.singleExperience}>
      <div className={styles.singleExperience__timeline}>
        <div className={styles.singleExperience__circle} />
        <div className={styles.singleExperience__line} />
      </div>
      <div className={styles.singleExperience__content}>
        <h1 className={styles.singleExperience__title}>
          {title} at{" "}
          <span className={styles.singleExperience__company}>{company}</span>
        </h1>
        <p className={styles.singleExperience__date}>
          {start} <span className={styles.singleExperience__end}>- {end}</span>
        </p>
        <p className={styles.singleExperience__description}>{description}</p>
      </div>
    </div>
  );
};

export default Experience;
