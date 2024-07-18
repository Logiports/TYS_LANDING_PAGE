import { FC, ReactNode } from "react";
import classes from "./simple.card2.module.css";
import { StaticImageData } from "next/image";
import { ThemedContainer, ThemedImage } from "@/components_themed";

interface SimpleCard2Props {
  image: StaticImageData;
  alt: string;
  children?: ReactNode;
}

const SimpleCard2: FC<SimpleCard2Props> = ({ image, alt, children }) => {
  return (
    <ThemedContainer element="article" className={classes.card}>
      <ThemedImage src={image} alt={alt} />
      <ThemedContainer
        element="div"
        backgroundColor="primary-dark"
        className={classes.card__box}
      >
        {children}
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default SimpleCard2;
