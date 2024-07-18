import classes from "./system.module.css";
import { ThemedContainer, ThemedText, ThemedButton } from "@/components_themed";

const SystemLinks = () => {
  const URLs = {
    PROVEEDORES: "http://tys.yavuerp.com.ar:10000/jcnt/portal/frontend/",
    CLIENTES: "http://logistica.terminalesyservicios.com.ar",
  };
  return (
    <ThemedContainer
      element="section"
      globalPadding="both"
      backgroundColor={"primary-dark"}
      paddingBottom={"sm"}
      paddingTop={"sm"}
    >
      <ThemedText element="span" fontSize="lg">
        Sistemas de{" "}
        <ThemedText element="span" fontWeight="semibold">
          Terminales y Servicios
        </ThemedText>
        . Seleccione el sistema al que desea ingresar.
      </ThemedText>
      <ThemedContainer
        element="div"
        marginTop={"xs"}
        className={classes.buttons}
      >
        <ThemedButton href={URLs.CLIENTES} theme="light" target="_blank">
          Clientes
        </ThemedButton>
        <ThemedButton href={URLs.PROVEEDORES} theme="light" target="_blank">
          Proveedores
        </ThemedButton>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default SystemLinks;
