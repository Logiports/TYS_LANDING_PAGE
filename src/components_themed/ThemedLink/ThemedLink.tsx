import Link from "next/link";
import { ColorType } from "@/types";
import { FC, ReactNode } from "react";

interface ThemedLinkProps {
  href: string;
  color?: ColorType;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  children: ReactNode;
}

const ThemedLink: FC<ThemedLinkProps> = ({
  href,
  color = "primary-regular",
  target,
  className,
  children,
}) => {
  return (
    <Link href={href} target={target} className={`color-${color} ${className}`}>
      {children}
    </Link>
  );
};

export default ThemedLink;
