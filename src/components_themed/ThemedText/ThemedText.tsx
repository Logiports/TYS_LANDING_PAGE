import { FC, ReactNode } from "react";
//types
import {
  ThemedTextElementsType,
  FontSizesType,
  FontWeightType,
  ColorType,
  SpacingType,
} from "@/types";

interface ThemedTextProps {
  element: ThemedTextElementsType;
  fontSize?: FontSizesType;
  fontWeight?: FontWeightType;
  color?: ColorType;
  marginTop?: SpacingType;
  marginBottom?: SpacingType;
  paddingTop?: SpacingType;
  paddingBottom?: SpacingType;
  className?: string;
  children?: ReactNode;
}

const ThemedText: FC<ThemedTextProps> = ({
  element = "div",
  fontSize,
  fontWeight,
  color,
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom,
  className,
  children,
  ...props
}) => {
  const Element = element;

  const spacing = {
    marginTop: marginTop ? `mt-${marginTop}` : null,
    marginBottom: marginBottom ? `mb-${marginBottom}` : null,
    paddingTop: paddingTop ? `pt-${paddingTop}` : null,
    paddingBottom: paddingBottom ? `pb-${paddingBottom}` : null,
  };
  const spacingClass = `${spacing.marginTop} ${spacing.marginBottom} ${spacing.paddingTop} ${spacing.paddingBottom}`;

  return (
    <Element
      className={`font-size-${fontSize} font-weight-${fontWeight} color-${color} ${spacingClass} ${className} ${props}`}
    >
      {children}
    </Element>
  );
};

export default ThemedText;
