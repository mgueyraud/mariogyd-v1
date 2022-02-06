import type { NextPage } from "next";
import { Container } from "@components";
import styles from "@styles/pages/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.section_header}>
        <Container size="md">
          <p
            style={{
              fontWeight: 500,
              color: "var(--color-bright-turquoise)",
              marginBottom: 10,
            }}
          >
            Hi my name is,
          </p>
          <h1 className={styles.bigTitle}>Mario Gueyraud</h1>
          <h1 className={styles.bigTitle}>
            {`I'm a `}
            <span className={styles.gradientText}>Frontend</span> Engineer.
          </h1>
          <p className={styles.description}>
            {`I'm a software engineer based on Paraguay. I love everything related
            to frontend such as css, javascript, a11y and also performance. I am
            focused on building deligthful user experiences with high-quality
            code.`}
          </p>
        </Container>
      </section>
    </>
  );
};

export default Home;
