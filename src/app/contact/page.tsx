import { ContactHero, SocialBanner } from "./(sections)";
//components
import { ThemedContainer } from "@/components_themed";
import { BannerYear } from "@/components";

export default function Contact() {
  return (
    <ThemedContainer element="main">
      <ContactHero />
      <SocialBanner />
      <BannerYear />
    </ThemedContainer>
  );
}
