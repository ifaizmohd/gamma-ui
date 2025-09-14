import type { FC } from "react";
import type { IButtonProps } from "./types/Button.types";
import { StyledButton } from "./styles/Button.styles";

const Button: FC<IButtonProps> = ({
  label,
  variant = "text",
  variation = "small",
  color = "primary",
  className,
}) => {
  return (
    <StyledButton
      variant={variant}
      variation={variation}
      color={color}
      className={className}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
