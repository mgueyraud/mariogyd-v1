import { ImageProps } from "next/image";
import React from "react";
import Image from "next/image";
import styles from "@styles/components/GradientImage.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type GradientImageProps = { rotate?: "left" | "right" } & ImageProps;

const GradientImage: React.FC<GradientImageProps> = ({
  src,
  alt,
  rotate = "left",
  ...rest
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const rotationValue = rotate === "left" ? -7 : 7;

  return (
    <div className={styles.gradient__background}>
      <motion.div
        ref={ref}
        className={`${styles.gradient__image} ${
          styles[`gradient__image_r_${rotate}`]
        }`}
        animate={{
          rotate: inView ? rotationValue : 0,
          width: inView ? "92%" : "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 50,
          velocity: 2,
        }}
      >
        <Image src={src} alt={alt} {...rest} />
      </motion.div>
    </div>
  );
};

export default GradientImage;
