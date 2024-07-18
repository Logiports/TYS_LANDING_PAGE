import classes from "./hero.module.css";
//assets
import image_0000 from "@/images/empresa/0000.webp";
//components
import { BackgroundRepeated } from "@/components";
import { ThemedContainer, ThemedText } from "@/components_themed";

const ServicesHero = () => {
  return (
    <ThemedContainer element="section">
      <BackgroundRepeated image={image_0000} alt="">
        <ThemedContainer
          element="div"
          globalPadding="both"
          className={classes.hero}
        >
          <ThemedContainer element="div">
            <ThemedText element="h1" fontSize="2xl" marginBottom="md">
              TERMINALES Y SERVICIOS
            </ThemedText>
            <ThemedText
              element="p"
              fontSize="4xl"
              fontWeight="bold"
              className={classes.hero__subtitle}
            >
              ENCUENTRA EL SERVICIO A TU MEDIDA.
            </ThemedText>
          </ThemedContainer>
        </ThemedContainer>
      </BackgroundRepeated>
    </ThemedContainer>
  );
};

export default ServicesHero;
