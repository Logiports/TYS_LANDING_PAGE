import {
  Hero,
  About,
  Services,
  SystemLinks,
  History,
  Quequen,
} from "./(sections)";
//components
import { ThemedContainer } from "@/components_themed";
import { BannerYear } from "@/components";

export default function Home() {
  return (
    <ThemedContainer element="main">
      <Hero />
      <SystemLinks />
      <Services />
      <About />
      <History />
      <Quequen />
      <BannerYear />
    </ThemedContainer>
  );
}
