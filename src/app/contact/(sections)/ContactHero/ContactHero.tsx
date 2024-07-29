import classes from "./hero.module.css";
import { ThemedContainer, ThemedImage } from "@/components_themed";
//assets
import image_0011 from "@/images/empresa/0011.webp";

const ContactHero = () => {
  return (
    <ThemedContainer element="section" className={classes.hero__container}>
      <ThemedImage alt="img" src={image_0011} placeholder="blur" />
    </ThemedContainer>
  );
};

export default ContactHero;
