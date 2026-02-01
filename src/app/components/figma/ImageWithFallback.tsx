import React, { useState } from 'react';

const PLACEHOLDER_SVG =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMTAwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iODAiIGZpbGw9IiNlZWUiIC8+CiAgPHRleHQgeD0iNTAiIHk9IjQwIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjYWFhIj5JbWFnZTwvdGV4dD4KPC9zdmc+';

type Props = {
  src?: string;
  alt?: string;
  className?: string;
};

export function ImageWithFallback({ src, alt, className, ...rest }: Props & React.ImgHTMLAttributes<HTMLImageElement>) {
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(src);

  return (
    <img
      src={currentSrc ?? PLACEHOLDER_SVG}
      alt={alt}
      className={className}
      {...rest}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src !== PLACEHOLDER_SVG) {
          img.src = PLACEHOLDER_SVG;
        }
      }}
    />
  );
}
