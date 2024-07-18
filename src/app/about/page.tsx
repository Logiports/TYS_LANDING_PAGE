import {
  AboutHero,
  TextInformation,
  CardsInformation,
  SloganInformation,
  SloganInformation2,
} from "./(sections)";
//components
import { ThemedContainer } from "@/components_themed";
import { BannerYear } from "@/components";

export default function About() {
  return (
    <ThemedContainer element="main">
      <AboutHero />
      <TextInformation />
      <SloganInformation2 />
      <BannerYear />
      <CardsInformation />
      <SloganInformation />
    </ThemedContainer>
  );
}
