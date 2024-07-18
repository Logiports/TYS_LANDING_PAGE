import not_image from "@/images/empresa/not-image.webp";
import { BannerItem } from "@/components";
import { ThemedContainer, ThemedText } from "@/components_themed";

const Banners = () => {
  return (
    <ThemedContainer element="section">
      <BannerItem image={not_image} alt="img" backgroundColor="gray-light">
        <ThemedText element="h2" fontSize="2xl" fontWeight="light">
          Un Legado de Excelencia
        </ThemedText>
        <ThemedText element="p" marginTop="xs">
          A lo largo de los años, Terminales y Servicios S.A. ha logrado
          combinar infraestructura avanzada y recursos humanos de alto calibre
          para ofrecer servicios de logística portuaria superiores. La empresa
          sigue comprometida con el crecimiento sostenible y la creación de
          valor para sus accionistas, clientes y la comunidad en general.
        </ThemedText>
      </BannerItem>
      <BannerItem
        image={not_image}
        alt="img"
        backgroundColor="gray-light"
        invert
      >
        <ThemedText element="h2" fontSize="2xl" fontWeight="light">
          Proyectos de Futuro
        </ThemedText>
        <ThemedText element="p" marginTop="xs">
          En su constante búsqueda por innovar y expandirse, Terminales y
          Servicios S.A. ha anunciado la construcción de un nuevo puerto
          agroindustrial en Timbúes, Santa Fe. Con una inversión de 550 millones
          de dólares, este proyecto promete generar miles de empleos y
          posicionar a la región como un polo de exportación agroindustrial a
          nivel mundial.
        </ThemedText>
      </BannerItem>
    </ThemedContainer>
  );
};

export default Banners;
