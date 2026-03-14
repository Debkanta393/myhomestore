import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoader({image, alt, style}) {
  return (
    <LazyLoadImage
      src={image}
      alt={alt}
      effect="blur"
      className={style}
    />
  );
}
