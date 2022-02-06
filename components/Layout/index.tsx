import React from "react";
import styles from "@styles/components/Layout.module.css";

type LayoutProps = {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children, size = "lg" }) => {
  return <div className={styles[`content-size-${size}`]}>{children}</div>;
};

export default Layout;
