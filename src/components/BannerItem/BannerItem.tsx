import { FC, ReactNode } from "react";
import classes from "./banner.item.module.css";
//next js
import { StaticImageData } from "next/image";
//components
import { ThemedContainer, ThemedImage } from "@/components_themed";
//types
import { BackgroundColorType } from "@/types";

interface BannerItemProps {
  invert?: boolean;
  image: StaticImageData;
  alt: string;
  backgroundColor?: BackgroundColorType;
  children?: ReactNode;
}

const BannerItem: FC<BannerItemProps> = ({
  invert,
  image,
  alt,
  backgroundColor = "white",
  children,
}) => {
  return (
    <ThemedContainer
      element="article"
      className={invert ? classes["banner--invert"] : classes.banner}
      backgroundColor={backgroundColor}
    >
      <ThemedContainer element="div" className={classes.banner__text}>
        <ThemedContainer element="div" globalPadding="both">
          {children}
        </ThemedContainer>
      </ThemedContainer>
      <ThemedContainer element="div" className={classes.banner__image}>
        <ThemedImage src={image} alt={alt} />
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default BannerItem;
