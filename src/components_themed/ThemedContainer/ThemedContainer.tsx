import { FC, ReactNode } from "react";
import classes from "./container.module.css";
//types
import {
  BackgroundColorType,
  ThemedContainerElementsType,
  SpacingType,
} from "@/types";

interface ThemedContainerProps {
  element: ThemedContainerElementsType;
  backgroundColor?: BackgroundColorType;
  globalPadding?: "both" | "right" | "left";
  height?: "100" | "90";
  marginTop?: SpacingType;
  marginBottom?: SpacingType;
  paddingTop?: SpacingType;
  paddingBottom?: SpacingType;
  className?: string;
  children?: ReactNode;
}

const ThemedContainer: FC<ThemedContainerProps> = ({
  element = "div",
  backgroundColor,
  globalPadding,
  height,
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  className,
  children,
  ...props
}) => {
  const Element = element;

  const globalPaddingClass =
    globalPadding === "both"
      ? "global-padding"
      : globalPadding === "right"
      ? "global-padding-right"
      : globalPadding === "left"
      ? "global-padding-left"
      : "";

  const heightClass = height ? classes[`h-${height}-vh`] : null;

  const spacing = {
    marginTop: marginTop ? `mt-${marginTop}` : null,
    marginBottom: marginBottom ? `mb-${marginBottom}` : null,
    paddingTop: paddingTop ? `pt-${paddingTop}` : null,
    paddingBottom: paddingBottom ? `pb-${paddingBottom}` : null,
  };
  const spacingClass = `${spacing.marginTop} ${spacing.marginBottom} ${spacing.paddingTop} ${spacing.paddingBottom}`;

  return (
    <Element
      className={`background-${backgroundColor} ${globalPaddingClass} ${heightClass} ${spacingClass} ${className} ${props}`}
    >
      {children}
    </Element>
  );
};

export default ThemedContainer;
