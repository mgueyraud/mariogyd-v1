import React from "react";
import { icons } from "@constants/icons.constants";
import styles from "@styles/components/SocialIcon.module.css";

type SocialIconProps = {
  type: "github" | "twitter" | "linkedin";
  href: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ type, href }) => {
  const icon = icons[type];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.socialIcon}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
