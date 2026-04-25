import React from "react";
import { Image } from "@unpic/react";

const Images = ({ imgSrc, className, imgAlt, width, height, layout }) => {

  if (!imgSrc) return null;

  const isLocalImage =
    imgSrc.startsWith("/") ||
    imgSrc.startsWith("./") ||
    imgSrc.startsWith("../");

  if (isLocalImage) {
    return (
      <img
        src={imgSrc}
        alt={imgAlt || ""}
        className={className}
        loading="lazy"
        decoding="async"
      />
    );
  }


  return (
    <Image
      src={imgSrc}
      width={width || 400}
      height={height || 300}
      layout={layout || "constrained"}
      alt={imgAlt || ""}
      className={className}
    />
  );
};

export default Images;