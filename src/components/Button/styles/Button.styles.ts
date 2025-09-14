import styled, { css } from "styled-components";
import type { IButtonStyleProps } from "../types/Button.types";

export const StyledButton = styled.button<IButtonStyleProps>`
  text-align: center;
  ${({ variant, theme }) =>
    variant === "text" &&
    css`
      border: none;
      background-color: transparent;
      padding: ${theme?.spacing["2"]};
    `};
  ${({ variant, theme }) =>
    variant === "outlined" &&
    css`
      border: 1px solid ${theme.colors.primary};
      background-color: ${theme.colors.light};
      border-radius: ${theme.borderRadius.sm};
      color: ${theme.colors.text.primary};
    `};
  ${({ variant, theme }) =>
    variant === "contained" &&
    css`
      background-color: ${theme.colors.background.secondary};
      color: ${theme.colors.text.primary};
      &:hover {
        background-color: ${theme.colors.background.secondaryDark};
      }
    `}
`;
