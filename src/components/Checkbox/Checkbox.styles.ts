import styled, { css } from "styled-components";

export const CheckboxContainer = styled.div<{
  $disabled: boolean;
  $labelPosition: "left" | "right";
}>`
  display: inline-flex;
  align-items: center;
  gap: var(--unit-2);
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  flex-direction: ${({ $labelPosition }) =>
    $labelPosition === "left" ? "row-reverse" : "row"};
`;

export const CheckboxBox = styled.div<{
  $checked: boolean;
  $indeterminate: boolean;
  $disabled: boolean;
  $size: "sm" | "md" | "lg";
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: calc(var(--unit-1) * 0.5) solid var(--border-default);
  background: var(--surface-card);
  border-radius: var(--unit-1);
  transition: all 0.2s ease;

  ${({ $size }) =>
    ({
      sm: css`
        width: var(--unit-4);
        height: var(--unit-4);
      `,
      md: css`
        width: var(--unit-5);
        height: var(--unit-5);
      `,
      lg: css`
        width: var(--unit-6);
        height: var(--unit-6);
      `,
    }[$size])}

  ${({ $checked }) =>
    $checked &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ $indeterminate }) =>
    $indeterminate &&
    css`
      background: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      opacity: 0.5;
    `}
`;

export const CheckIcon = styled.div<{
  $checked: boolean;
  $indeterminate: boolean;
}>`
  width: var(--unit-3);
  height: var(--unit-3);
  opacity: ${({ $checked, $indeterminate }) =>
    $checked || $indeterminate ? 1 : 0};
  transition: opacity 0.2s ease;
  color: var(--text-inverse);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span<{
  $disabled: boolean;
}>`
  color: ${({ $disabled }) =>
    $disabled ? "var(--text-tertiary)" : "var(--text-primary)"};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;
