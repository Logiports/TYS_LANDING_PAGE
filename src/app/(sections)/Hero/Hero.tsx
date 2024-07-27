//assets
import image_0009 from "@/images/empresa/0009.webp";
//components
import { ThemedContainer, ThemedImage } from "@/components_themed";

const Hero = () => {
  return (
    <ThemedContainer element="section" height="90">
      <ThemedImage alt="img" src={image_0009} placeholder="blur" />
    </ThemedContainer>
  );
};

export default Hero;
