
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BlurImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string;
}

const BlurImage = ({ 
  src, 
  alt, 
  className, 
  wrapperClassName,
  ...props 
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (src) {
      setIsLoading(true);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setIsLoading(false);
      };
    }
  }, [src]);

  return (
    <div className={cn("overflow-hidden relative", wrapperClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt || "Image"}
          loading="lazy"
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isLoading ? "scale-110 blur-2xl opacity-40" : "scale-100 blur-0 opacity-100",
            className
          )}
          {...props}
        />
      )}
    </div>
  );
};

export default BlurImage;
