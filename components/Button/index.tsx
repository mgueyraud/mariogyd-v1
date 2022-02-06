import React from "react";
import styles from "@styles/components/Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "outline" | "default";
};

const Button: React.FC<ButtonProps> = ({ children, variant = "default" }) => {
  return (
    <button className={`${styles.button} ${styles[`button__${variant}`]}`}>
      {children}
    </button>
  );
};

export default Button;
