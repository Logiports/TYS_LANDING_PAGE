import { FC, ReactNode } from "react";
import classes from "./button.module.css";
import Link from "next/link";
import { SpacingType } from "@/types";

interface ThemedButtonProps {
  href: string;
  children?: ReactNode;
  type?: "filled" | "outlined";
  theme?: "primary" | "dark" | "light";
  marginTop?: SpacingType;
  marginBottom?: SpacingType;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

const ThemedButton: FC<ThemedButtonProps> = ({
  children,
  href = "#",
  type = "outlined",
  theme = "dark",
  marginTop,
  marginBottom,
  target = "_self",
}) => {
  const buttonClasses = `${classes.button} ${classes[`button__${type}`]} ${
    classes[`button__${type}--${theme}`]
  }`;

  const spacing = {
    marginTop: marginTop ? `mt-${marginTop}` : null,
    marginBottom: marginBottom ? `mb-${marginBottom}` : null,
  };
  const spacingClass = `${spacing.marginTop} ${spacing.marginBottom}`;

  return (
    <Link
      href={href}
      target={target}
      className={`${buttonClasses} ${spacingClass}`}
    >
      {children}
    </Link>
  );
};

export default ThemedButton;
