import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button.types";
import { Actionable } from "../Actionable";

const sizes = {
  sm: css`
    font-size: var(--font-size-sm);
    padding: var(--space-xs) var(--space-sm);
  `,
  md: css`
    font-size: var(--font-size-md);
    padding: var(--space-sm) var(--space-md);
  `,
  lg: css`
    font-size: var(--font-size-lg);
    padding: var(--space-md) var(--space-lg);
  `,
};

const variants = {
  primary: css`
    background-color: var(--color-brand-primary);
    color: var(--text-inverse);
    border: none;

    &:hover {
      background-color: var(--color-brand-primary-hover);
    }

    &:disabled {
      opacity: var(--state-disabled-opacity);
      cursor: not-allowed;
    }
  `,
  secondary: css`
    background-color: var(--color-brand-secondary);
    color: var(--text-inverse);
    border: none;

    &:hover {
      background-color: #7e22ce;
    }
  `,
  outline: css`
    background-color: transparent;
    border: 1px solid var(--border-strong);
    color: var(--text-primary);

    &:hover {
      background-color: var(--surface-hover);
    }
  `,
  text: css`
    background-color: transparent;
    border: none;
    color: var(--color-brand-primary);

    &:hover {
      background-color: rgba(37, 99, 235, var(--state-hover-opacity));
    }
  `,
};

export const StyledButton = styled(Actionable)<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: ${({ theme }) => theme.typography.lineHeight.md};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size = "md" }) => sizes[size]}
  ${({ variant = "primary" }) => variants[variant]}
`;
