//images
import image_0006 from "@/images/empresa/0006.webp";
//components
import { BannerItem } from "@/components";
import { ThemedContainer, ThemedButton, ThemedText } from "@/components_themed";
//models
import { MainRoutesModel } from "@/models";

const History = () => {
  return (
    <ThemedContainer element="section">
      <BannerItem image={image_0006} alt="" backgroundColor="gray-light" invert>
        <>
          <ThemedText element="span" fontSize="2xl" fontWeight="semibold">
            Nuestra Historia
          </ThemedText>
          <ThemedText element="p" marginTop="xs" marginBottom="sm">
            Nacida en San Nicolás, una región clave para el desarrollo
            industrial y portuario, Terminales y Servicios S.A. comenzó su
            andadura con operaciones en los puertos locales. A través de una
            gestión innovadora y una infraestructura robusta, la empresa
            rápidamente se consolidó como un actor principal en la logística de
            graneles sólidos y líquidos.
          </ThemedText>
          <ThemedButton href={MainRoutesModel.HISTORY} theme="dark">
            Leer Más
          </ThemedButton>
        </>
      </BannerItem>
    </ThemedContainer>
  );
};

export default History;
