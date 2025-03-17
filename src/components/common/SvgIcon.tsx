import React from 'react';
import Image from 'next/image';

interface SvgIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ src, alt, width, height, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default SvgIcon;