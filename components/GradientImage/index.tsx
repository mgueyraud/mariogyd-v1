import { ImageProps } from "next/image";
import React from "react";
import Image from "next/image";
import styles from "@styles/components/GradientImage.module.css";

type GradientImageProps = { rotate?: "left" | "right" } & ImageProps;

const GradientImage: React.FC<GradientImageProps> = ({
  src,
  alt,
  rotate = "left",
  ...rest
}) => {
  return (
    <div className={styles.gradient__background}>
      <div
        className={`${styles.gradient__image} ${
          styles[`gradient__image_r_${rotate}`]
        }`}
      >
        <Image src={src} alt={alt} {...rest} />
      </div>
    </div>
  );
};

export default GradientImage;
