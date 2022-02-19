import { Container } from "@components";
import { PostMeta } from "@interface/Post";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import { getPostFromSlug, getSlugs } from "@api";
import "highlight.js/styles/base16/synth-midnight-terminal-dark.css";
import styles from "@styles/pages/BlogPost.module.css";
import Link from "next/link";

type BlogPostProps = {
  post: {
    source: MDXRemoteSerializeResult;
    meta: PostMeta;
  };
};

const BlogPost: NextPage<BlogPostProps> = ({ post }) => {
  return (
    <Container size="lg">
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <section className={styles.post_container}>
        <Link href="/blog">
          <a className={styles.post_back}>Back to blog</a>
        </Link>
        <article className={styles.post}>
          <h1 className={styles.post_title}>{post.meta.title}</h1>
          <h3 className={styles.post_date}>
            {new Date(post.meta.date).toLocaleDateString()}
          </h3>
          <MDXRemote {...post.source} />
        </article>
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
