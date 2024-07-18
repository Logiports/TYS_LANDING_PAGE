import classes from "./slogan.module.css";
import { ThemedContainer, ThemedText } from "@/components_themed";

const SloganInformation2 = () => {
  return (
    <ThemedContainer
      element="section"
      globalPadding="both"
      paddingTop="md"
      paddingBottom="md"
      backgroundColor="gray-light"
    >
      <ThemedText element="p" fontSize="2xl" fontWeight="semibold">
        Nuestra{" "}
        <ThemedText element="span" color="primary-regular">
          fuerza
        </ThemedText>{" "}
        reside en el talento y la dedicación de nuestro equipo, impulsando la
        innovación y el crecimiento continuo.
      </ThemedText>
      <ThemedContainer
        element="div"
        marginTop="md"
        className={classes.slogan__wrapper}
      >
        <ThemedContainer element="article" className={classes.slogan__article}>
          <ThemedText element="p" fontSize="lg" fontWeight="semibold">
            Sed ut perspiciatis unde omnis iste natus error sit
          </ThemedText>
          <ThemedText element="p">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </ThemedText>
        </ThemedContainer>
        <ThemedContainer element="article" className={classes.slogan__article}>
          <ThemedText element="p" fontSize="lg" fontWeight="semibold">
            Sed ut perspiciatis unde omnis iste natus error sit
          </ThemedText>
          <ThemedText element="p">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </ThemedText>
        </ThemedContainer>
        <ThemedContainer element="article" className={classes.slogan__article}>
          <ThemedText element="p" fontSize="lg" fontWeight="semibold">
            Sed ut perspiciatis unde omnis iste natus error sit
          </ThemedText>
          <ThemedText element="p">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </ThemedText>
        </ThemedContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default SloganInformation2;
