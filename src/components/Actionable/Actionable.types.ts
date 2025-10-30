import type { JSX } from "react";
import type React from "react";

type CSSVariable = `--${string}`;
type DataAttributes = Record<`data-${string}`, string | boolean>;
type StyleAttributes = React.CSSProperties &
  Record<CSSVariable, string | number | undefined>;

export type Attributes<
  TagName = void,
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  O extends Record<string, unknown> = {}
> = Omit<
  (TagName extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[TagName]
    : React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) &
    DataAttributes & { style?: StyleAttributes },
  O extends object ? keyof O : "className"
>;

export type ActionableProps = {
  children?: React.ReactNode;
  onClick?: (
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ) => void;
  href?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  as?: keyof JSX.IntrinsicElements | React.ElementType;
  tabIndex?: number;
  rippleColor?: string;
  attributes?: Attributes<"button"> &
    Omit<JSX.IntrinsicElements["a"], keyof Attributes<"button">>;
};

export type Ref = React.Ref<HTMLButtonElement | HTMLAnchorElement>;
