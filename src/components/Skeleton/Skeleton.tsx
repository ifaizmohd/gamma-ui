import { StyledSkeleton } from "./Skeleton.styles";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rectangle",
  width,
  height,
  borderRadius,
  className,
  style,
}) => {
  const computedRadius =
    variant === "circle" ? "50%" : variant === "text" ? "4px" : borderRadius;

  return (
    <StyledSkeleton
      className={className}
      style={style}
      $width={width}
      $height={height}
      $borderRadius={computedRadius}
    />
  );
};
