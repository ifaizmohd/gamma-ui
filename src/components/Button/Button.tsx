import React from "react";
import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  leftIcon,
  rightIcon,
  disabled,
  ...rest
}) => {
  return (
    <StyledButton disabled={disabled || isLoading} {...rest}>
      {isLoading && <span className="loader" />}
      {!isLoading && leftIcon && <span className="icon-left">{leftIcon}</span>}
      {children}
      {!isLoading && rightIcon && (
        <span className="icon-right">{rightIcon}</span>
      )}
    </StyledButton>
  );
};
