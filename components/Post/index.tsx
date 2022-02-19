import React from "react";
import styles from "@styles/components/Post.module.css";

type PostProps = {
  title: string;
  date: string;
  description: string;
  link: string;
};

const Post: React.FC<PostProps> = ({ title, date, description, link }) => {
  return (
    <article className={styles.post}>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <p>{description}</p>
      <a href={link}>Read more</a>
    </article>
  );
};

export default Post;
