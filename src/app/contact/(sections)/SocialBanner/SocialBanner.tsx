import classes from "./social.module.css";
import { ThemedContainer, ThemedLink, ThemedText } from "@/components_themed";
import { SvgIcon } from "@/components";
import linkedin_icon from "@/icons/linkedin.svg";
import facebook_icon from "@/icons/facebook.svg";
import instagram_icon from "@/icons/instagram.svg";

const SocialBanner = () => {
  return (
    <ThemedContainer
      element="section"
      globalPadding="both"
      paddingBottom="lg"
      paddingTop="lg"
      className={classes.social__banner}
    >
      <ThemedText element="p" fontSize="2xl" className={classes.social__text}>
        Síguenos en nuestras redes
      </ThemedText>
      <ThemedContainer element="div" className={classes.social__icons}>
        <ThemedLink href="#" className={classes.social__link}>
          <SvgIcon
            src={instagram_icon}
            alt="Instagram"
            className={classes.social__icon}
          />
        </ThemedLink>
        <ThemedLink href="#" className={classes.social__link}>
          <SvgIcon
            src={facebook_icon}
            alt="Facebook"
            className={classes.social__icon}
          />
        </ThemedLink>
        <ThemedLink href="#" className={classes.social__link}>
          <SvgIcon
            src={linkedin_icon}
            alt="linkedin"
            className={classes.social__icon}
          />
        </ThemedLink>
      </ThemedContainer>
    </ThemedContainer>
  );
};

export default SocialBanner;
