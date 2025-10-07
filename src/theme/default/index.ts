import type { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "var(--color-brand-primary)",
    secondary: "var(--color-brand-secondary)",
    accent: "var(--color-brand-accent)",

    /** semantic colors */
    semantics: {
      success: "var(--color-success)",
      warning: "var(--color-warning)",
      error: "var(--color-error)",
      info: "var(--color-info)",
    },

    /** surface colors */
    surface: {
      background: "var(--surface-background)",
      card: "var(--surface-card)",
      modal: "var(--surface-modal)",
      popover: "var(--surface-popover)",
      state: {
        hover: "var(--surface-hover)",
        pressed: "var(--surface-pressed)",
      },
    },

    /** text colors */
    text: {
      primary: "var(--text-primary)",
      secondary: "var(--text-secondary)",
      tertiary: "var(--text-tertiary)",
      inverse: "var(--text-inverse)",
      link: "var(--text-link)",
    },

    /** border colors. */
    border: {
      default: "var(--border-default)",
      strong: "var(--border-strong)",
      focus: "var(--border-focus)",
    },

    /** states color. */
    state: {
      hover: {
        opacity: "var(--state-hover-opacity)",
      },
      focus: {
        ring: {
          color: "var(--state-focus-ring-color)",
        },
      },
      disabled: {
        opacity: "var(--state-disabled-opacity)",
      },
    },
  },

  /** shadows. */
  shadow: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)",
    xl: "var(--shadow-xl)",
  },

  /** border radius. */
  borderRadius: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    full: "var(--radius-xl)",
  },

  /** spacing. */
  space: {
    xxs: "var(--space-xxs)",
    xs: "var(--space-xs)",
    sm: "var(--space-sm)",
    md: "var(--space-md)",
    lg: "var(--space-lg)",
    xl: "var(--space-xl)",
    xxl: "var(--space-xxl)",
  },

  /** typography. */
  typography: {
    fontFamily: "var(--font-family-sans)",
    fontSize: {
      xs: "var(--font-size-xs)",
      sm: "var(--font-size-sm)",
      md: "var(--font-size-md)",
      lg: "var(--font-size-lg)",
      xl: "var(--font-size-xl)",
    },
    fontWeight: {
      medium: "var(--font-weight-regular)",
      regular: "var(--font-weight-medium)",
      bold: "var(--font-weight-bold)",
    },
    lineHeight: {
      sm: "var(--line-height-sm)",
      md: "var(--line-height-md)",
      lg: "var(--line-height-lg)",
    },
  },

  /** transitions. */
  transition: {
    fast: "var(--transition-fast)",
    medium: "var(--transition-medium)",
    slow: "var(--transition-slow)",
  },
};
