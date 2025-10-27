import { StyledTypography } from "./Text.styles";
import type { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({
  as = "p",
  variant = "body",
  color = "primary",
  weight = "regular",
  align = "left",
  size,
  children,
  ...props
}) => (
  <StyledTypography
    as={as}
    $variant={variant}
    $color={color}
    $weight={weight}
    $align={align}
    $size={size}
    {...props}
  >
    {children}
  </StyledTypography>
);
