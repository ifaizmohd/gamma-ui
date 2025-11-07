import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const StyledSkeleton = styled.div<{
  $width?: string | number;
  $height?: string | number;
  $borderRadius?: string | number;
}>`
  display: inline-block;
  width: ${({ $width }) =>
    typeof $width === "number" ? `${$width}px` : $width || "100%"};
  height: ${({ $height }) =>
    typeof $height === "number" ? `${$height}px` : $height || "2em"};
  border-radius: ${({ $borderRadius }) =>
    typeof $borderRadius === "number"
      ? `${$borderRadius}px`
      : $borderRadius || "4px"};
  background: linear-gradient(
    90deg,
    var(--surface-hover) 25%,
    var(--surface-card) 50%,
    var(--surface-hover) 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.6s infinite linear;
  opacity: 0.9;
`;
