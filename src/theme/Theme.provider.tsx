import type { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { defaultTheme } from "./default";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <StyledThemeProvider theme={defaultTheme}>{children}</StyledThemeProvider>
  );
};
