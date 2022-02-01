import React from "react";
import buttonStyles from "../../styles/components/button.module.scss";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className={buttonStyles.default}>{children}</button>;
};

export default Button;
