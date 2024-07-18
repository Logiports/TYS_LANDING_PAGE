import { FC } from "react";
import classes from "./themed.image.module.css";
import Image, { StaticImageData } from "next/image";

interface ThemedImageProps {
  src: StaticImageData;
  alt: string;
  placeholder?: "blur" | "empty";
  className?: string;
}

const ThemedImage: FC<ThemedImageProps> = ({
  src,
  alt,
  className,
  placeholder = "empty",
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder={placeholder}
      className={`${classes.image} ${className}`}
    />
  );
};

export default ThemedImage;
