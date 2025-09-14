import type { HTMLProps } from "react";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "text" | "outlined" | "contained";
type ButtonColor = "primary" | "secondary";

export interface IButtonStyleProps extends HTMLProps<HTMLButtonElement> {
  variant: ButtonVariant;
  variation: ButtonSize;
  color: ButtonColor;
  className?: string;
}

export interface IButtonProps extends IButtonStyleProps {
  label: string;
}
