//images
import image_0002 from "@/images/empresa/0002.webp";
//components
import { BannerItem } from "@/components";
import { ThemedContainer, ThemedButton, ThemedText } from "@/components_themed";
//models
import { MainRoutesModel } from "@/models";

const About = () => {
  return (
    <ThemedContainer element="section">
      <BannerItem image={image_0002} alt="" backgroundColor="gray-light">
        <>
          <ThemedText element="span" fontSize="2xl" fontWeight="semibold">
            ¿Quienes Somos?
          </ThemedText>
          <ThemedText element="p" marginTop="xs" marginBottom="sm">
            Terminales y Servicios S.A. fue fundada con la visión de convertirse
            en un líder en el sector logístico y portuario de Argentina. Desde
            sus inicios, la empresa ha mantenido un compromiso firme con la
            calidad, eficiencia y seguridad en todos sus servicios.
          </ThemedText>
          <ThemedButton href={MainRoutesModel.ABOUT}>Leer Más</ThemedButton>
        </>
      </BannerItem>
    </ThemedContainer>
  );
};

export default About;
