import React from "react";
import styles from "@styles/components/Container.module.css";

type ContainerProps = {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children, size = "lg" }) => {
  return <div className={styles[`content-size-${size}`]}>{children}</div>;
};

export default Container;
