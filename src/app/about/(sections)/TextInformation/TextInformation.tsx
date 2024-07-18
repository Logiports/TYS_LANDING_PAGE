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
          Terminales y Servicios
        </ThemedText>{" "}
        es una empresa líder en el sector logístico, comprometida con la
        eficiencia y la excelencia en el servicio. Con una sólida presencia
        internacional, operamos en múltiples países, brindando soluciones
        integrales para el transporte y manejo de carga. Nuestra dedicada equipe
        de profesionales se esfuerza por ofrecer soluciones personalizadas que
        satisfagan las necesidades únicas de cada cliente. En Terminales y
        Servicios, nuestro compromiso es su éxito.
      </ThemedText>
      <ThemedText element="p" marginTop="xs" fontSize="lg">
        Nuestra red de plantas, estratégicamente ubicadas en Argentina,
        garantiza una cobertura óptima para nuestros clientes. Con instalaciones
        en múltiples ubicaciones, ofrecemos servicios eficientes y
        personalizados para satisfacer diversas necesidades logísticas en todo
        el país.
      </ThemedText>
      <ThemedText element="p" fontSize="lg" marginTop="xs">
        Nuestro{" "}
        <ThemedText
          element="span"
          color="primary-regular"
          fontWeight="semibold"
        >
          propósito
        </ThemedText>{" "}
        está en el centro de todo lo que hacemos. Inspira nuestros esfuerzos y
        guía nuestras decisiones.
      </ThemedText>
      <ThemedText element="p" marginTop="md" fontWeight="semibold" fontSize="xl">
        Innovadora y líder en su sector, con crecimiento constante.
      </ThemedText>
    </ThemedContainer>
  );
};

export default TextInformation;
