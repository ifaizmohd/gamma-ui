import type { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { AttireByAasia } from "./Themes";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledThemeProvider theme={AttireByAasia}>{children}</StyledThemeProvider>
  );
};
