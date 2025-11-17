import React from "react";
import { StyledView } from "./View.styles";
import type { ViewProps } from "./View.types";

export const View = React.forwardRef<HTMLDivElement, ViewProps>(
  (props, ref) => <StyledView ref={ref} {...props} />
);

View.displayName = "View";
