import classes from "./hero.module.css";
//assets
import image_0006 from "@/images/empresa/0006.webp";
//components
import { BackgroundRepeated } from "@/components";
import { ThemedContainer, ThemedText } from "@/components_themed";

const HistoryHero = () => {
  return (
    <ThemedContainer element="section">
      <BackgroundRepeated image={image_0006} alt="">
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
              CONOCE NUESTRA HISTORIA
            </ThemedText>
          </ThemedContainer>
        </ThemedContainer>
      </BackgroundRepeated>
    </ThemedContainer>
  );
};

export default HistoryHero;
