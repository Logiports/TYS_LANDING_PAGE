import classes from "./cards.module.css";
import { ThemedContainer, ThemedText } from "@/components_themed";
import { SimpleCard2 } from "@/components";
import image_0001 from "@/images/empresa/0005.webp";
import image_0003 from "@/images/empresa/0003.webp";
import image_0004 from "@/images/empresa/0004.webp";

const CardsInformation = () => {
  return (
    <ThemedContainer
      element="section"
      globalPadding="both"
      paddingTop="lg"
      paddingBottom="lg"
      backgroundColor="primary-light"
    >
      <ThemedContainer element="div" className={classes.wrapper}>
        <SimpleCard2 image={image_0003} alt="image">
          <ThemedText element="p" fontWeight="semibold" marginBottom="xs">
            <ThemedText element="span" color="primary-light">
              Compromiso
            </ThemedText>{" "}
            con la sostenibilidad.
          </ThemedText>
          <ThemedText element="p">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore.
          </ThemedText>
        </SimpleCard2>
        <SimpleCard2 image={image_0001} alt="image">
          <ThemedText element="p" fontWeight="semibold" marginBottom="xs">
            <ThemedText element="span" color="primary-light">
              Líder
            </ThemedText>{" "}
            en innovación y eficiencia empresarial.
          </ThemedText>
          <ThemedText element="p">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore.
          </ThemedText>
        </SimpleCard2>
        <SimpleCard2 image={image_0004} alt="image">
          <ThemedText element="p" fontWeight="semibold" marginBottom="xs">
            <ThemedText element="span" color="primary-light">
              Excelencia
            </ThemedText>{" "}
            en servicio y sostenibilidad.
          </ThemedText>
          <ThemedText element="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </ThemedText>
        </SimpleCard2>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default CardsInformation;
