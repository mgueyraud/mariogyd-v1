import type { NextPage } from "next";
import { Container, Experience, GradientImage, Title } from "@components";
import styles from "@styles/pages/Home.module.css";
import Head from "next/head";
import aboutMeImage from "@assets/img/placeholders/about-me.jpg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mario Gueyraud | Frontend Developer</title>
        <meta
          property="description"
          content="Mario Gueyraud is a software engineer who specializes in building deligthful user experiences with high-quality code"
        />
        <meta
          name="image"
          content="https://mariogyd.com/assets/img/placeholders/the-man.jpg"
        />
        <meta
          property="og:title"
          content="Mario Gueyraud | Frontend Developer"
          key="title"
        />
        <meta
          property="og:description"
          content="Mario Gueyraud is a software engineer who specializes in building deligthful user experiences with high-quality code"
        />
        <meta
          name="og:image"
          content="https://mariogyd.com/assets/img/placeholders/the-man.jpg"
        />
        <meta name="og:url" content="https://mariogyd.com/" />
        <meta name="og:type" content="website" />
      </Head>
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
            I&#39;m a<span className={styles.gradientText}>Frontend</span>{" "}
            Engineer.
          </h1>
          <p className={styles.description}>
            I&#39;m a software engineer based on Paraguay. I love everything
            related to frontend such as css, javascript, a11y and also
            performance. I am focused on building deligthful user experiences
            with high-quality code.
          </p>
        </Container>
      </section>
      <section className={styles.section_about_me} id="about-me">
        <Container size="lg">
          <div className="u-hide-sm">
            <Title>About me</Title>
          </div>
          <div className={styles.section_about_container}>
            <div className={styles.section_about_description}>
              <div className="u-hide-md_lg">
                <Title>About me</Title>
              </div>
              <p>
                Hello! My name is Mario and I enjoy creating things with code. I
                started coding at 13, my interested started because I wanted to
                know how mobile applications were built.
                <br />
                <br /> Until today I&#39;ve had the privilege to work at such
                amazing companies and products.
                <br />
                <br /> I&#39;ve worked with different products such as &nbsp;
                <b>Newsletters , Insurance, Banks</b> and also CMS web pages.
                Coding with SASS, CSS, Javascript, HTML.
                <br />
                <br /> Nowadays, my main languages are javascript, css and html,
                looking forward to expand my knowledge in the backend and mobile
                development.
              </p>
            </div>
            <div>
              <GradientImage src={aboutMeImage} alt="About Me Image" />
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.section_works} id="experience">
        <Container size="sm">
          <Title>Where I&#39;ve Worked</Title>
          <div className={styles.section_works__experience}>
            <Experience
              works={[
                {
                  title: "Frontend Engineer",
                  company: "Lithium",
                  start: "July 2021",
                  end: "Now",
                  description:
                    "Outsourced to an US Company called Tonic3, currently working on a product for Avery Dennison clients, with React and Typescript.",
                },
                {
                  title: "Frontend and UI Developer",
                  company: "Teixidó",
                  start: "March",
                  end: "July 2021",
                  description: `Maintenance and development of CSS Architecture (Sass, Itcss, BEM) of different products.

                  Optimization of different web pages for faster loading experiences.
                  
                  UI development of different products such as Newsletters, Insurance and 
                  
                  Economist web pages.
                  
                  Experience on API implementations with Laravel and Codeigniter.`,
                },
                {
                  title: "Internship",
                  company: "Teixidó",
                  start: "December 2017",
                  end: "February 2018",
                  description: `Learned the fundamentals of web development.

                Implementation of a CRUD for a Bank web Page.`,
                },
              ]}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
