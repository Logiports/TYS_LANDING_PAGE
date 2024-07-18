import image_0012 from "@/images/servicios/0012.webp";
import image_0010 from "@/images/servicios/0010.webp";
import image_0011 from "@/images/servicios/0011.webp";

import { MainRoutesModel } from "@/models";
import { SimpleCard, SimpleCardContainer } from "@/components";
import { ThemedContainer, ThemedText, ThemedButton } from "@/components_themed";

const Services = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <ThemedContainer
      element="section"
      backgroundColor="primary-light"
      globalPadding="both"
      paddingTop="lg"
      paddingBottom="lg"
    >
      <ThemedText
        element="h2"
        fontWeight="semibold"
        fontSize="2xl"
        marginBottom="xs"
      >
        Servicios
      </ThemedText>
      <ThemedText element="p" fontSize="lg" marginBottom="sm">
        En{" "}
        <ThemedText
          element="span"
          color="primary-regular"
          fontWeight="semibold"
        >
          Terminales y Servicios
        </ThemedText>
        , nos especializamos en la gestión integral de graneles, brindando
        servicios de estiba, desestiba, almacenamiento y despacho de graneles
        líquidos y sólidos, además de soluciones para proyectos especiales y
        carga ferroviaria, con un enfoque en la{" "}
        <ThemedText
          element="span"
          color="primary-regular"
          fontWeight="semibold"
        >
          calidad
        </ThemedText>{" "}
        y la{" "}
        <ThemedText
          element="span"
          color="primary-regular"
          fontWeight="semibold"
        >
          seguridad.
        </ThemedText>
      </ThemedText>
      <SimpleCardContainer>
        <SimpleCard
          image={image_0012}
          alt="Ingreso de graneles líquidos"
          title="INGRESO DE GRANELES LÍQUIDOS"
          description={lorem}
        />
        <SimpleCard
          image={image_0010}
          alt="ESTIBA Y DESESTIBA DE GRANOS"
          title="ESTIBA Y DESESTIBA DE GRANOS"
          description={lorem}
        />
        <SimpleCard
          image={image_0011}
          alt="Ingreso de graneles en depósitos"
          title="INGRESO DE GRANELES EN DEPÓSITOS"
          description={lorem}
        />
      </SimpleCardContainer>
      <ThemedButton
        href={MainRoutesModel.SERVICES}
        type="filled"
        theme="primary"
        marginTop="sm"
      >
        Ver todos los servicios
      </ThemedButton>
    </ThemedContainer>
  );
};

export default Services;
