import { HistoryHero, TextInformation, Banners } from "./(sections)";
//components
import { ThemedContainer } from "@/components_themed";
import { BannerYear } from "@/components";

export default function History() {
  return (
    <ThemedContainer element="main">
      <HistoryHero />
      <TextInformation />
      <BannerYear />
      <Banners />
    </ThemedContainer>
  );
}
