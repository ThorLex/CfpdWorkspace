import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  text: string;
  alt: string;
  className: string;
}

const ImageCard = ({ src, text, alt, className }: Props) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={343}
        height={191}
        className={`rounded-sm object-cover ${className}`}
      />
    </div>
  );
};

export default ImageCard;
