import { ImageProps } from "next/image";
import React from "react";
import Image from "next/image";
import styles from "@styles/components/GradientImage.module.css";

type GradientImageProps = ImageProps;

const GradientImage: React.FC<GradientImageProps> = ({ src, alt, ...rest }) => {
  return (
    <div className={styles.gradient__background}>
      <div className={styles.gradient__image}>
        <Image src={src} alt={alt} {...rest} />
      </div>
    </div>
  );
};

export default GradientImage;
