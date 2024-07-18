import { ReactNode } from "react";
import classes from "./simple.card.module.css";
import { ThemedContainer } from "@/components_themed";

const SimpleCardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <ThemedContainer
      element="div"
      className={classes.cards__container}
    >
      {children}
    </ThemedContainer>
  );
};

export default SimpleCardContainer;
