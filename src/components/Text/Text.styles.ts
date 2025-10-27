import styled, { css } from "styled-components";
import type { TextSize, TextVariants } from "./Text.types";

export const StyledTypography = styled.p<{
  $variant: TextVariants;
  $color: string;
  $weight: string;
  $align: string;
  $size?: TextSize;
}>`
  margin: 0;
  font-family: var(--font-family-sans, "Inter", sans-serif);
  text-align: ${({ $align }) => $align};
  font-weight: ${({ $weight }) => `var(--font-weight-${$weight})`};

  ${({ $variant }) => {
    switch ($variant) {
      case "h1":
        return css`
          font-size: var(--font-scale-200);
          line-height: var(--line-height-sm);
        `;
      case "h2":
        return css`
          font-size: var(--font-scale-150);
          line-height: var(--line-height-md);
        `;
      case "body":
        return css`
          font-size: var(--font-scale-100);
          line-height: var(--line-height-md);
        `;
      case "caption":
        return css`
          font-size: var(--font-scale-75);
          line-height: var(--line-height-lg);
        `;
      default:
        return css`
          font-size: var(--font-scale-100);
        `;
    }
  }}

  /* ✅ Custom override via scale (e.g. 125 → var(--font-scale-125)) */
  ${({ $size }) =>
    $size &&
    css`
      font-size: var(--font-scale-${$size});
    `}

  ${({ $color }) => {
    switch ($color) {
      case "secondary":
        return css`
          color: var(--color-text-secondary);
        `;
      case "muted":
        return css`
          color: var(--color-text-muted);
        `;
      case "error":
        return css`
          color: var(--color-error);
        `;
      case "success":
        return css`
          color: var(--color-success);
        `;
      default:
        return css`
          color: var(--color-text-primary);
        `;
    }
  }}
`;
