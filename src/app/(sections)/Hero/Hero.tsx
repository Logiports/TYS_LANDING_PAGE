//assets
import image_0000 from "@/images/empresa/0000.webp";
//components
import { ThemedContainer, ThemedImage } from "@/components_themed";

const Hero = () => {
  return (
    <ThemedContainer element="section" height="90">
      <ThemedImage alt="img" src={image_0000} placeholder="blur" />
    </ThemedContainer>
  );
};

export default Hero;
