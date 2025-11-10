import styled, { css } from "styled-components";
import type { ImageStyleProps } from "./Image.types";

export const ImageWrapper = styled.div<ImageStyleProps>`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: ${({ radius = "sm", theme }) => theme.borderRadius[radius]};

  ${({ width }) =>
    width &&
    css`
      width: ${typeof width === "number" ? `${width}px` : width};
    `}

  ${({ height }) =>
    height &&
    css`
      height: ${typeof height === "number" ? `${height}px` : height};
    `}
  aspect-ratio: ${({ aspectRatio }) => aspectRatio || "auto"};
  background-color: var(--surface-hover);
`;

export const StyledImage = styled.img<{ fit: string; isLoading?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: ${({ fit }) => fit};
  display: ${({ isLoading }) => (isLoading ? "none" : "block")};
  transition: opacity 0.3s ease;
`;
