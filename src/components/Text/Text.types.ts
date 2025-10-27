import type { JSX } from "react";

export type TextVariants =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle"
  | "body"
  | "caption"
  | "overline";

export type TextColors =
  | "primary"
  | "secondary"
  | "muted"
  | "error"
  | "success";

export type TextSize =
  | "50"
  | "62"
  | "75"
  | "87"
  | "100"
  | "112"
  | "125"
  | "137"
  | "150"
  | "162"
  | "175"
  | "187"
  | "200"
  | "212"
  | "225"
  | "237"
  | "250"
  | "262"
  | "275"
  | "300";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  variant?: TextVariants;
  color?: TextColors;
  weight?: "regular" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
  children: React.ReactNode;
  size?: TextSize;
}
