import classes from "./footer.module.css";
import Image from "next/image";
import logo_dark from "@/logos/logo_dark.svg";

import { MainRoutesModel } from "@/models";
import { ThemedContainer, ThemedText, ThemedLink } from "@/components_themed";

const Footer = () => {
  return (
    <ThemedContainer element="footer">
      <ThemedContainer
        element="div"
        className={classes.footer}
        globalPadding="both"
        paddingTop="md"
        paddingBottom="md"
      >
        <ThemedContainer element="div" className={classes.footer__social}>
          <ThemedContainer element="div" className={classes.footer__logo}>
            <Image src={logo_dark} alt="Logo tys" width={50} />
            <ThemedText
              element="div"
              color="primary-regular"
              fontSize="lg"
              fontWeight="semibold"
            >
              TERMINALES Y <br />
              SERVICIOS S.A.
            </ThemedText>
          </ThemedContainer>
          <ThemedText element="p" marginTop="sm">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.
          </ThemedText>
        </ThemedContainer>
        <ThemedContainer element="div" className={classes.footer__grid}>
          <ThemedContainer element="ul">
            <ThemedContainer element="li">
              <ThemedLink href={MainRoutesModel.SERVICES}>Servicios</ThemedLink>
            </ThemedContainer>
            <ThemedContainer element="li">
              <ThemedLink href={MainRoutesModel.ABOUT}>
                ¿Quienes Somos?
              </ThemedLink>
            </ThemedContainer>
            <ThemedContainer element="li">
              <ThemedLink href="#">Proyectos</ThemedLink>
            </ThemedContainer>
          </ThemedContainer>
          <ThemedContainer element="ul">
            <ThemedContainer element="li">
              <ThemedLink href={MainRoutesModel.HISTORY}>
                Nuestra Historia
              </ThemedLink>
            </ThemedContainer>
            <ThemedContainer element="li">
              <ThemedLink href="#">Contacto</ThemedLink>
            </ThemedContainer>
            <ThemedContainer element="li">
              <ThemedLink href="#">Accesebilidad</ThemedLink>
            </ThemedContainer>
          </ThemedContainer>
        </ThemedContainer>
      </ThemedContainer>
      <ThemedContainer
        element="div"
        backgroundColor="primary-dark"
        className={classes.footer__copyright}
      >
        <ThemedText element="span" marginTop="sm" marginBottom="sm">
          2024 Terminales y Servicios
        </ThemedText>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default Footer;
