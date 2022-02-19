import React from "react";
import styles from "@styles/components/Post.module.css";
import { useRouter } from "next/router";
import Link from "next/link";

type PostProps = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const Post: React.FC<PostProps> = ({ title, date, description, slug }) => {
  return (
    <article className={styles.post}>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <p>{description}</p>
      <Link href={`blog/${slug}`}>Read more</Link>
    </article>
  );
};

export default Post;
