declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;

      semantics: {
        success: string;
        warning: string;
        error: string;
        info: string;
      };

      surface: {
        background: string;
        card: string;
        modal: string;
        popover: string;

        state: {
          hover: string;
          pressed: string;
        };
      };

      text: {
        primary: string;
        secondary: string;
        tertiary: string;
        inverse: string;
        link: string;
      };

      border: {
        default: string;
        strong: string;
        focus: string;
      };

      state: {
        hover: {
          opacity: string;
        };
        focus: {
          ring: {
            color: string;
          };
        };
        disabled: {
          opacity: string;
        };
      };
    };

    shadow: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };

    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };

    space: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    typography: {
      fontFamily: string;
      fontSize: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
      fontWeight: {
        regular: string;
        medium: string;
        bold: string;
      };
      lineHeight: {
        sm: string;
        md: string;
        lg: string;
      };
    };

    transition: {
      fast: string;
      medium: string;
      slow: string;
      fadeIn: string;
    };
  }
}
