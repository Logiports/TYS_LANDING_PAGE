import { ServicesHero, ServicesList } from "./(sections)";
//components
import { ThemedContainer } from "@/components_themed";

export default function Services() {
  return (
    <ThemedContainer element="main">
      <ServicesHero />
      <ServicesList />
    </ThemedContainer>
  );
}
