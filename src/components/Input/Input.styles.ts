import styled, { css } from "styled-components";
import type { InputProps } from "./Input.types";

const inputVariants = {
  outlined: css`
    border: 1px solid var(--border-default);
    background-color: var(--color-neutral-0);
    &:focus {
      border-color: var(--color-brand-primary);
    }
  `,
  filled: css`
    border: none;
    background-color: var(--surface-background);
    &:focus {
      background-color: var(--color-surface);
      outline: 1px solid var(--color-brand-primary);
    }
  `,
  standard: css`
    border: none;
    border-bottom: 1px solid var(--border-default);
    border-radius: 0;
    background: transparent;
    &:focus {
      border-bottom-color: var(--color-brand-primary);
    }
  `,
};

const inputSizes = {
  sm: css`
    padding: 6px 10px;
    font-size: var(--font-size-sm);
  `,
  md: css`
    padding: var(--unit-2) var(--unit-3);
    font-size: var(--font-size-md);
  `,
  lg: css`
    padding: 10px 14px;
    font-size: var(--font-size-lg);
  `,
};

export const InputContainer = styled.div`
  position: relative;
`;

export const StyledInput = styled.input<InputProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  transition: all 0.2s ease;
  outline: none;

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: -10px;
    left: 4px;
    font-size: ${({ theme }) => theme.typography.fontSize.xs};
    color: ${({ theme }) => theme.colors.primary};
    background-color: var(--color-neutral-0);
    padding: 0 4px;
  }

  ${({ variant = "outlined" }) => inputVariants[variant]}
  ${({ inputSize = "md" }) => inputSizes[inputSize]}
  
  ${({ error }) =>
    error &&
    css`
      border-color: var(--color-error);
      &:focus {
        border-color: var(--color-error);
      }
      &:focus ~ label,
      &:not(:placeholder-shown) ~ label {
        color: var(--color-error);
      }
    `};
`;

export const Label = styled.label`
  position: absolute;
  top: var(--unit-2);
  left: var(--unit-3);
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: var(--color-neutral-500);
  transition: ${({ theme }) => theme.transition.medium};
  pointer-events: none;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.semantics.error};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  margin: var(--unit-2);
`;
