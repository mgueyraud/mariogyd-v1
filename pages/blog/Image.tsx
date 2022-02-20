import React, { useState } from "react";
import { default as NextImage, ImageProps } from "next/image";
import { useEffect } from "react";

const Image = (props: ImageProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 30,
        width: "100%",
        height: isMobile ? "200px" : "500px",
        position: "relative",
      }}
    >
      <NextImage {...props} layout="fill" objectFit="cover" />
    </div>
  );
};

export default Image;
