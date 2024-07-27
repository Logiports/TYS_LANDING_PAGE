import { FC } from "react";
//next js
import Image, { StaticImageData } from "next/image";

interface SvgIconProps {
  src: StaticImageData;
  alt: string;
  width?: number;
  className?: any;
  onClick?: () => void;
}

const SvgIcon: FC<SvgIconProps> = ({ src, alt, width, className, onClick }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      style={{ cursor: "pointer" }}
      width={width}
    />
  );
};

export default SvgIcon;
