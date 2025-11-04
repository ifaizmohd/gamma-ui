import type React from "react";
import type { ActionableProps } from "../Actionable";

interface BaseProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Whether the link is styled as a button-like actionable or inline text link */
  variant?: "default" | "underline" | "button";
  /** Whether the link should open in a new tab */
  external?: boolean;
}

export type Props = BaseProps & ActionableProps;
