import { ThemedContainer, ThemedText } from "@/components_themed";

const TextInformation = () => {
  return (
    <ThemedContainer
      element="section"
      globalPadding="both"
      paddingTop="md"
      paddingBottom="md"
      backgroundColor="white"
    >
      <ThemedText element="p" fontSize="lg">
        <ThemedText
          element="span"
          color="primary-regular"
          fontWeight="semibold"
        >
          Terminales y Servicios S.A.
        </ThemedText>{" "}
        fue fundada con la visión de convertirse en un líder en el sector
        logístico y portuario de Argentina. Desde sus inicios, la empresa ha
        mantenido un compromiso firme con la calidad, eficiencia y seguridad en
        todos sus servicios.
      </ThemedText>
      <ThemedText element="p" marginTop="xs" fontSize="lg">
        Nacida en San Nicolás, una región clave para el desarrollo industrial y
        portuario, Terminales y Servicios S.A. comenzó su andadura con
        operaciones en los puertos locales. A través de una gestión innovadora y
        una infraestructura robusta, la empresa rápidamente se consolidó como un
        actor principal en la logística de graneles sólidos y líquidos.
      </ThemedText>
      <ThemedText element="p" fontSize="lg" marginTop="xs">
        Con una{" "}
        <ThemedText
          element="span"
          color="primary-regular"
          fontWeight="semibold"
        >
          visión de futuro
        </ThemedText>{" "}
        y un fuerte espíritu emprendedor, Terminales y Servicios S.A. amplió sus
        operaciones a otros puertos estratégicos como Quequén. La empresa no
        solo se enfocó en el almacenamiento y la distribución de productos, sino
        también en la desestiba, el fraccionamiento y los depósitos fiscales,
        adaptándose a las necesidades cambiantes del mercado.
      </ThemedText>
      <ThemedText
        element="p"
        marginTop="md"
        fontWeight="semibold"
        fontSize="xl"
      >
        Tu socio confiable en operaciones portuarias.
      </ThemedText>
    </ThemedContainer>
  );
};

export default TextInformation;
