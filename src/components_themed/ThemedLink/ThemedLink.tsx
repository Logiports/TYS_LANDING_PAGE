import Link from "next/link";
import { ColorType } from "@/types";
import { FC, ReactNode } from "react";

interface ThemedLinkProps {
  href: string;
  color?: ColorType;
  className?: string;
  children: ReactNode;
}

const ThemedLink: FC<ThemedLinkProps> = ({
  href,
  color = "primary-regular",
  className,
  children,
}) => {
  return (
    <Link href={href} className={`color-${color} ${className}`}>
      {children}
    </Link>
  );
};

export default ThemedLink;
