import { FC, ReactNode } from "react";
import classes from "./styles.module.css";
//next js
import { StaticImageData } from "next/image";
//components
import { ThemedContainer, ThemedImage } from "@/components_themed";

interface BackgroundRepeatedProps {
  image: StaticImageData;
  alt: string;
  children?: ReactNode;
}

const BackgroundRepeated: FC<BackgroundRepeatedProps> = ({
  image,
  alt,
  children,
}) => {
  return (
    <ThemedContainer
      element="div"
      backgroundColor="dark"
      className={classes.background}
    >
      <ThemedImage
        src={image}
        alt={alt}
        placeholder="blur"
        className={`${classes.background__backImage}`}
      />
      <ThemedContainer
        element="div"
        globalPadding="right"
        className={classes.background__frontImage}
      >
        <ThemedImage src={image} alt={alt} />
      </ThemedContainer>
      <ThemedContainer element="div" className={classes.background__children}>
        {children}
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default BackgroundRepeated;
