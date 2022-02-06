import React from "react";
import styles from "@styles/components/Experience.module.css";

type Work = {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

type ExperienceProps = {
  works: Work[];
};

const Experience: React.FC<ExperienceProps> = ({ works }) => {
  return (
    <div>
      {works.map((work) => (
        <div
          className={styles.singleExperience}
          key={work.start + work.company}
        >
          <div className={styles.singleExperience__timeline}>
            <div className={styles.singleExperience__circle} />
            <div className={styles.singleExperience__line} />
          </div>
          <div className={styles.singleExperience__content}>
            <h1 className={styles.singleExperience__title}>
              {work.title} at{" "}
              <span className={styles.singleExperience__company}>
                {work.company}
              </span>
            </h1>
            <p className={styles.singleExperience__date}>
              {work.start}{" "}
              <span className={styles.singleExperience__end}>- {work.end}</span>
            </p>
            <p className={styles.singleExperience__description}>
              {work.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
