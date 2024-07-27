import image_0001 from "@/images/servicios/0001.webp";
import image_0002 from "@/images/servicios/0002.webp";
import image_0003 from "@/images/servicios/0003.webp";
import image_0004 from "@/images/servicios/0004.webp";
import image_0005 from "@/images/servicios/0005.webp";
import image_0006 from "@/images/servicios/0006.webp";
import image_0007 from "@/images/servicios/0007.webp";
import image_0008 from "@/images/servicios/0008.webp";
import image_0009 from "@/images/servicios/0009.webp";
import image_0010 from "@/images/servicios/0010.webp";
import image_0011 from "@/images/servicios/0011.webp";
import image_0012 from "@/images/servicios/0012.webp";
import image_0013 from "@/images/servicios/0013.webp";
import not_image from "@/images/empresa/not-image.webp";

import { BannerItem, SimpleCardContainer, SimpleCard } from "@/components";
import { ThemedContainer, ThemedText } from "@/components_themed";

const ServicesList = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <ThemedContainer element="div">
      <ThemedContainer element="section">
        <BannerItem image={image_0010} alt="ESTIBA Y DESESTIBA DE GRANOS">
          <ThemedText element="h2" fontSize="2xl" fontWeight="light">
            ESTIBA Y DESESTIBA DE GRANOS
          </ThemedText>
          <ThemedText element="p" marginTop="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ThemedText>
        </BannerItem>
        <BannerItem
          image={image_0011}
          alt="INGRESO DE GRANELES EN DEPÓSITOS"
          invert
        >
          <ThemedText element="h2" fontSize="2xl" fontWeight="light">
            INGRESO DE GRANELES EN DEPÓSITOS
          </ThemedText>
          <ThemedText element="p" marginTop="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ThemedText>
        </BannerItem>
      </ThemedContainer>
      <ThemedContainer
        element="section"
        globalPadding="both"
        backgroundColor="gray-light"
        paddingTop="lg"
        paddingBottom="sm"
      >
        <SimpleCardContainer>
          <SimpleCard
            image={image_0012}
            alt="INGRESO DE GRANELES LÍQUIDOS"
            title="INGRESO DE GRANELES LÍQUIDOS"
            description={lorem}
          />
          <SimpleCard
            image={image_0008}
            alt="DESPACHO DE GRANELES LÍQUIDOS"
            title="DESPACHO DE GRANELES LÍQUIDOS"
            description={lorem}
          />
          <SimpleCard
            image={image_0009}
            alt="DESPACHO DE UREA TRATADA"
            title="DESPACHO DE UREA TRATADA"
            description={lorem}
          />
        </SimpleCardContainer>
      </ThemedContainer>
      <ThemedContainer
        element="section"
        globalPadding="both"
        backgroundColor="gray-light"
        paddingTop="sm"
        paddingBottom="lg"
      >
        <SimpleCardContainer>
          <SimpleCard
            image={image_0007}
            alt="DESPACHO DE GRANELES EN SISTEMAS FIJOS"
            title="DESPACHO DE GRANELES EN SISTEMAS FIJOS"
            description={lorem}
          />
          <SimpleCard
            image={image_0006}
            alt="DESPACHO DE GRANELES EN BOLSONES"
            title="DESPACHO DE GRANELES EN BOLSONES"
            description={lorem}
          />
          <SimpleCard
            image={image_0005}
            alt="DESPACHO DE GRANELES EMBOLSADOS"
            title="DESPACHO DE GRANELES EMBOLSADOS"
            description={lorem}
          />
        </SimpleCardContainer>
      </ThemedContainer>
      <ThemedContainer element="section">
        <BannerItem
          image={image_0004}
          alt="DESPACHO DE GRANELES CON ZARANDA - DESTERRONADOR"
        >
          <ThemedText element="h2" fontSize="2xl" fontWeight="light">
            DESPACHO DE GRANELES CON ZARANDA - DESTERRONADOR
          </ThemedText>
          <ThemedText element="p" marginTop="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ThemedText>
        </BannerItem>
        <BannerItem
          image={image_0013}
          alt="ALMACENAJE DE GRANELES LÍQUIDOS"
          invert
        >
          <ThemedText element="h2" fontSize="2xl" fontWeight="light">
            ALMACENAJE DE GRANELES LÍQUIDOS
          </ThemedText>
          <ThemedText element="p" marginTop="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ThemedText>
        </BannerItem>
        <BannerItem image={image_0001} alt="CARGA DE FORMACIONES FERROVIARIAS">
          <ThemedText element="h2" fontSize="2xl" fontWeight="light">
            CARGA DE FORMACIONES FERROVIARIAS
          </ThemedText>
          <ThemedText element="p" marginTop="xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </ThemedText>
        </BannerItem>
      </ThemedContainer>
      <ThemedContainer
        element="section"
        globalPadding="both"
        backgroundColor="gray-light"
        paddingTop="lg"
        paddingBottom="lg"
      >
        <SimpleCardContainer>
          <SimpleCard
            image={image_0003}
            alt="DESESTIBA DE BUQUES"
            title="DESESTIBA DE BUQUES"
            description={lorem}
          />
          <SimpleCard
            image={not_image}
            alt="DESESTIBA DE BARCAZAS"
            title="DESESTIBA DE BARCAZAS"
            description={lorem}
          />
          <SimpleCard
            image={image_0002}
            alt="CARGA DE PROYECTOS"
            title="CARGA DE PROYECTOS"
            description={lorem}
          />
        </SimpleCardContainer>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default ServicesList;
