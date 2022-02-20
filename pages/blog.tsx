import type { NextPage } from "next";
import Head from "next/head";

import styles from "@styles/pages/Posts.module.css";
import { Button, Container, Loading, Post, Title } from "@components";
import { getAllPosts } from "@api";
import { PostMeta } from "@interface/Post";

type BlogProps = { posts: PostMeta[] };

const Blog: NextPage<BlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Mario Gueyraud | Blog</title>
        <meta
          property="description"
          content="Check out some great resources and articles that I wrote to learn more about software engineering"
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
          content="Check out some great resources and articles that I wrote to learn more about software engineering"
        />
        <meta
          name="og:image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta name="og:url" content="https://mariogyd.com/" />
        <meta name="og:type" content="website" />
        <meta name="twitter:site" content="@mariogyd" />
        <meta name="twitter:creator" content="@mariogyd" />
      </Head>

      <section aria-label="posts" className={styles.section_posts}>
        <Container size="lg">
          <Title>Learn development with great articles.</Title>
          <div className={styles.section_posts_container}>
            <div>
              {posts.map((post, index) => {
                if ((index + 1) % 2 !== 0) {
                  return (
                    <Post
                      title={post.title}
                      date={new Date(post.date).toLocaleDateString()}
                      description={post.excerpt}
                      slug={post.slug}
                    />
                  );
                }
              })}
            </div>
            <div>
              {posts.map((post, index) => {
                if ((index + 1) % 2 === 0) {
                  return (
                    <Post
                      title={post.title}
                      date={new Date(post.date).toLocaleDateString()}
                      description={post.excerpt}
                      slug={post.slug}
                    />
                  );
                }
              })}
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

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return {
    props: { posts },
  };
}

export default Blog;
