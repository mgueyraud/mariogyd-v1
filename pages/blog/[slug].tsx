import { Container, SocialIcon } from "@components";
import { PostMeta } from "@interface/Post";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { getPostFromSlug, getSlugs } from "@api";
import "highlight.js/styles/base16/material-darker.css";
import styles from "@styles/pages/BlogPost.module.css";
import Link from "next/link";
import Image from "./Image";
import { icons } from "@constants/icons.constants";

type BlogPostProps = {
  post: {
    source: MDXRemoteSerializeResult;
    meta: PostMeta;
  };
};

const backIcon = (
  <svg
    width="10px"
    height="16px"
    viewBox="0 0 10 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <title>Back icon</title>
    <g
      id="Web"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
    >
      <g
        id="Blog-Desktop"
        transform="translate(-200.000000, -168.000000)"
        stroke="#05FFD1"
        strokeWidth="2"
      >
        <g id="POST" transform="translate(200.000000, 169.000000)">
          <g id="CTA-Link" transform="translate(1.500000, 0.000000)">
            <path
              d="M7,0 L0.353553391,6.64644661 C0.158291245,6.84170876 0.158291245,7.15829124 0.353553391,7.35355339 L7,14 L7,14"
              id="Back-icon"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  return (
    <Container size="lg">
      <Head>
        <title>{post.meta.title}</title>
        <meta property="description" content={post.meta.excerpt} />
        <meta
          name="image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta property="og:title" content={post.meta.title} key="title" />
        <meta property="og:description" content={post.meta.excerpt} />
        <meta
          name="og:image"
          content="https://mariogyd.com/assets/img/placeholders/dope-website.png"
        />
        <meta name="og:url" content="https://mariogyd.com/" />
        <meta name="og:type" content="website" />
        <meta name="twitter:card" content={post.meta.excerpt} />
        <meta name="twitter:site" content="@mariogyd" />
        <meta name="twitter:creator" content="@mariogyd" />
      </Head>
      <section className={styles.post_container}>
        <Link href="/blog">
          <a className={styles.post_back}>
            {backIcon}
            Back to blog
          </a>
        </Link>
        <article className={styles.post}>
          <h1 className={styles.post_title}>{post.meta.title}</h1>
          <h3 className={styles.post_date}>
            {new Date(post.meta.date).toLocaleDateString()}
          </h3>
          <MDXRemote {...post.source} components={{ Image }} />
        </article>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            `https://mariogyd.com/blog/${post.meta.slug}`
          )}&text=${encodeURIComponent(
            `I just read "${post.meta.title}" by @mariogyd`
          )}`}
          target="_blank"
          rel="noreferrer"
          className={styles.tweet}
        >
          {icons["twitter"]} Tweet this article
        </a>
        <div className={styles.divider} />
      </section>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        rehypeHighlight,
      ],
    },
  });

  return {
    props: { post: { source: mdxSource, meta } },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return { paths, fallback: false };
};

export default BlogPost;
