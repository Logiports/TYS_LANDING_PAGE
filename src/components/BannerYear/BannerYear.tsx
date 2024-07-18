import { FC } from "react";
import classes from "./banner.year.module.css";
//assets
import logo_light from "@/logos/logo_light.svg";
import logo_dark from "@/logos/logo_dark.svg";
import Image from "next/image";
//components
import { ThemedContainer, ThemedText } from "@/components_themed";
//types
import { BackgroundColorType, ColorType } from "@/types";

interface BannerYearProps {
  backgroundColor?: BackgroundColorType;
  logoType?: "light" | "dark";
  textColor?: ColorType;
}

const BannerYear: FC<BannerYearProps> = ({
  backgroundColor = "primary-dark",
  logoType = "light",
  textColor,
}) => {
  return (
    <ThemedContainer
      element="section"
      backgroundColor={backgroundColor}
      globalPadding="both"
      paddingBottom="md"
      paddingTop="md"
      className={classes.banner__wrapper}
    >
      <ThemedContainer element="div">
        <Image
          src={logoType === "light" ? logo_light : logo_dark}
          alt="logo"
          width={200}
        />
        <ThemedText
          element="p"
          fontSize="6xl"
          fontWeight="bold"
          color={textColor}
        >
          2024
        </ThemedText>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default BannerYear;
