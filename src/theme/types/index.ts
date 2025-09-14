declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      dark: string;
      light: string;
      success: string;
      warning: string;
      danger: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        inverted: string;
        logo: string;
        discount: string;
      };
      background: {
        default: string;
        paper: string;
        primary: string;
        secondary: string;
        secondaryDark: string;
        secondaryDarker: string;
      };
      border: {
        light: string;
      };
      gray: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    typography: {
      fontFamily: string;
      fontSize: {
        xsm: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        "2xl": string;
        "3xl": string;
        "4xl": string;
        "5xl": string;
        "6xl": string;
      };
      fontWeight: {
        light: number;
        normal: number;
        medium: number;
        semibold: number;
        bold: number;
      };
      lineHeight: {
        none: number;
        tight: number;
        snug: number;
        normal: number;
        relaxed: number;
        loose: number;
      };
    };
    spacing: {
      px: string;
      0: string;
      0.5: string;
      1: string;
      1.5: string;
      2: string;
      2.5: string;
      3: string;
      4: string;
      5: string;
      6: string;
      8: string;
      10: string;
      12: string;
      16: string;
      20: string;
      24: string;
      32: string;
      40: string;
      48: string;
      56: string;
      64: string;
    };
    borderRadius: {
      none: string;
      sm: string;
      default: string;
      md: string;
      lg: string;
      xl: string;
      full: string;
    };
    shadows: {
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      inner: string;
      none: string;
    };
    transitions: {
      easeInOut: string;
      easeOut: string;
    };
    mediaQuery: {
      mobileSm: string;
      mobileMd: string;
      mobileLg: string;
      mobileMax: string;
      tabletSm: string;
      tabletMd: string;
      tabletLg: string;
      tabletMax: string;
      desktop: string;
      desktopSm: string;
      desktopMd: string;
      desktopLg: string;
    };
  }
}
