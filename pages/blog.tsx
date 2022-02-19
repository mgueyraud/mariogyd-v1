import type { NextPage } from "next";
import Head from "next/head";

import styles from "@styles/pages/Posts.module.css";
import { Button, Container, Loading, Post, Title } from "@components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mario Gueyraud | Blog</title>
        <meta
          property="description"
          content="Mario Gueyraud is a software engineer who specializes in building deligthful user experiences with high-quality code"
        />
        <meta
          name="image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
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
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta name="og:url" content="https://mariogyd.com/" />
        <meta name="og:type" content="website" />
      </Head>

      <section aria-label="posts" className={styles.section_posts}>
        <Container size="lg">
          <Title>Learn development with great articles.</Title>
          <div className={styles.section_posts_container}>
            <div>
              <Post
                title="Currently the Optimization of a website how it impacts SEO?"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="How much does a WordPress website cost?"
                date="April 23, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="Currently the Optimization of a website how it impacts SEO?"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="How much does a WordPress website cost?"
                date="April 23, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="Currently the Optimization of a website how it impacts SEO?"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="How much does a WordPress website cost?"
                date="April 23, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
            </div>
            <div>
              <Post
                title="What Does the Development of Medical Mobile Software Consist of"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="The best Web Devleoper - Questions & Answers"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="What Does the Development of Medical Mobile Software Consist of"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="The best Web Devleoper - Questions & Answers"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="What Does the Development of Medical Mobile Software Consist of"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
              <Post
                title="The best Web Devleoper - Questions & Answers"
                date="February 01, 2021"
                description="The need for a telehealth solution has created a huge market for medical mobile software. Understanding understanding what types of options are available is just the start of the development"
                link="https://facebook.com"
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            {/* <Loading /> */}
            <Button className={styles.load_more}>Load more</Button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
