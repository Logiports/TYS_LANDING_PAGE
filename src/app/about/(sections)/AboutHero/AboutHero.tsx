import classes from "./hero.module.css";
//assets
import image_0002 from "@/images/empresa/0002.webp";
//components
import { BackgroundRepeated } from "@/components";
import { ThemedContainer, ThemedText } from "@/components_themed";

const AboutHero = () => {
  return (
    <ThemedContainer element="section">
      <BackgroundRepeated image={image_0002} alt="">
        <ThemedContainer
          element="div"
          globalPadding="both"
          className={classes.hero}
        >
          <ThemedContainer element="div" marginBottom="sm">
            <ThemedText element="h1" fontSize="2xl" marginBottom="md">
              TERMINALES Y SERVICIOS
            </ThemedText>
            <ThemedText
              element="p"
              fontSize="4xl"
              fontWeight="bold"
              className={classes.hero__subtitle}
            >
              DESCUBRE QUIENES SOMOS
            </ThemedText>
          </ThemedContainer>
        </ThemedContainer>
      </BackgroundRepeated>
    </ThemedContainer>
  );
};

export default AboutHero;
