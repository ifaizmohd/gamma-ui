import { StyledLink } from "./Link.styles";
import type { Props } from "./Link.types";

export const Link: React.FC<Props> = ({
  children,
  variant = "default",
  external,
  ...props
}) => {
  const rel = external ? "noopener noreferrer" : undefined;
  const target = external ? "_blank" : undefined;

  return (
    <StyledLink
      as="a"
      role="link"
      className={variant}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </StyledLink>
  );
};
