import { FC } from "react";
import classes from "./simple.card.module.css";
import { BackgroundColorType, ColorType } from "@/types";
import { StaticImageData } from "next/image";
import {
  ThemedContainer,
  ThemedText,
  ThemedLink,
  ThemedImage,
} from "@/components_themed";

interface SimpleCardProps {
  image: StaticImageData;
  alt: string;
  title: string;
  description?: string;
  backgroundColor?: BackgroundColorType;
  linkHref?: string;
  linkColor?: ColorType;
}

const SimpleCard: FC<SimpleCardProps> = ({
  image,
  alt,
  title,
  description,
  backgroundColor = "white",
  linkHref,
  linkColor,
}) => {
  return (
    <ThemedContainer
      element="article"
      backgroundColor={backgroundColor}
      className={classes.card}
    >
      <ThemedContainer element="div" className={classes.card__image}>
        <ThemedImage src={image} alt={alt} />
      </ThemedContainer>
      <ThemedContainer element="div" className={classes.card__textContainer}>
        <ThemedContainer element="div">
          <ThemedText element="div" fontSize="xl" marginBottom="xs">
            {title}
          </ThemedText>
          <ThemedText element="div" fontSize="sm">
            {description}
          </ThemedText>
        </ThemedContainer>
        {linkHref ? (
          <ThemedLink href={linkHref || "#"} color={linkColor}>
            Leer Más
          </ThemedLink>
        ) : (
          <ThemedContainer element="div" />
        )}
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default SimpleCard;
