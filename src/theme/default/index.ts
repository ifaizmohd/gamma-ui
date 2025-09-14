// import type { DefaultTheme } from "styled-components";
import { color } from "./color";
import { typography } from "./typography";
import { spacing } from "./spacing";
import { borderRadius } from "./borderRadius";
import { shadows } from "./shadows";
import { mediaQuery } from "../mediaQuery";
import { transitions } from "./animations";

export const DefaultTheme = {
  ...color,
  ...typography,
  ...spacing,
  ...borderRadius,
  ...shadows,
  ...mediaQuery,
  ...transitions,
};
