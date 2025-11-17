import type { ResponsiveObject, ResponsiveProp } from "./View.types";

// Type Guard
export function isResponsiveObject<T>(
  value: ResponsiveProp<T>
): value is ResponsiveObject<T> {
  return (
    typeof value === "object" &&
    value !== null &&
    ("s" in value || "m" in value || "l" in value)
  );
}

export function responsiveCss<T>(cssProp: string, value: ResponsiveProp<T>) {
  if (value == null) return "";

  // non-responsive simple value
  if (!isResponsiveObject(value)) {
    return `${cssProp}: ${value};`;
  }

  let styles = "";

  if (value.s) {
    styles += `@media var(--viewport-s) {
        ${cssProp}: ${value.s};
    }`;
  }
  if (value.m) {
    styles += `
      @media var(--viewport-m) {
        ${cssProp}: ${value.m};
      }
    `;
  }
  if (value.l) {
    styles += `
      @media var(--viewport-l) {
        ${cssProp}: ${value.l};
      }
    `;
  }

  return styles;
}
