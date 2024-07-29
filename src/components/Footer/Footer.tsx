import classes from "./footer.module.css";
//logo
import Image from "next/image";
import logo_dark from "@/logos/logo_dark.svg";
//icons
import { SvgIcon } from "../SvgIcon";
import instagram_icon from "@/icons/instagram.svg";
import facebook_icon from "@/icons/facebook.svg";
import linkedin_icon from "@/icons/linkedin.svg";
//models
import { MainRoutesModel, SystemsURLs } from "@/models";
//components
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
          <ThemedText element="p" marginTop="xs">
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do.
          </ThemedText>
          <ThemedContainer
            element="div"
            marginTop="xs"
            className={classes.footer_icons}
          >
            <ThemedLink href="#" className={classes.footer__icon}>
              <SvgIcon src={instagram_icon} alt="Instagram" />
            </ThemedLink>
            <ThemedLink href="#" className={classes.footer__icon}>
              <SvgIcon src={facebook_icon} alt="Facebook" />
            </ThemedLink>
            <ThemedLink href="#" className={classes.footer__icon}>
              <SvgIcon src={linkedin_icon} alt="Linkedin" />
            </ThemedLink>
          </ThemedContainer>
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
              <ThemedLink href={MainRoutesModel.CONTACT}>Contacto</ThemedLink>
            </ThemedContainer>
          </ThemedContainer>
          <ThemedContainer element="ul">
            <ThemedContainer element="li">
              <ThemedLink href={MainRoutesModel.HISTORY}>
                Nuestra Historia
              </ThemedLink>
            </ThemedContainer>
            <ThemedContainer element="li">
              <ThemedLink href={SystemsURLs.CLIENTES} target="_blank">
                Clientes (web)
              </ThemedLink>
            </ThemedContainer>
            <ThemedContainer element="li">
              <ThemedLink href={SystemsURLs.PROVEEDORES} target="_blank">
                Proveedores (web)
              </ThemedLink>
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
