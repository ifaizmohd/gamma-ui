import React, { useState } from "react";
import { Actionable } from "../Actionable";
import { ImageWrapper, StyledImage } from "./Image.styles";
import type { Props } from "./Image.types";
import { Skeleton } from "../Skeleton";

export const Image: React.FC<Props> = ({
  src,
  alt,
  fit = "cover",
  aspectRatio,
  fallbackSrc,
  isLoading: externalLoading,
  radius = "sm",
  isClickable = false,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  const content = (
    <Skeleton isLoading={!loaded}>
      <ImageWrapper
        aspectRatio={aspectRatio}
        radius={radius}
        isLoading={externalLoading || !loaded}
      >
        {!error && (
          <StyledImage
            {...rest}
            src={error ? fallbackSrc : src}
            alt={alt}
            fit={fit}
            onLoad={handleLoad}
            onError={handleError}
            isLoading={externalLoading || !loaded}
          />
        )}
      </ImageWrapper>
    </Skeleton>
  );

  return isClickable ? <Actionable as="div">{content}</Actionable> : content;
};
