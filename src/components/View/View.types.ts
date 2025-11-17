export type BreakpointKeys = "s" | "m" | "l";
export type ResponsiveObject<T> = Partial<Record<BreakpointKeys, T>>;
export type ResponsiveProp<T> = T | ResponsiveObject<T>;

type DisplayType =
  | "block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "grid"
  | "inline-grid";

export interface ViewProps extends React.HTMLAttributes<HTMLDivElement> {
  display?: ResponsiveProp<DisplayType>;
  flexDirection?: ResponsiveProp<React.CSSProperties["flexDirection"]>;
  justifyContent?: ResponsiveProp<React.CSSProperties["justifyContent"]>;
  alignItems?: ResponsiveProp<React.CSSProperties["alignItems"]>;
  gap?: ResponsiveProp<string | number>;

  gridTemplateColumns?: ResponsiveProp<string>;
  gridTemplateRows?: ResponsiveProp<string>;
  gridAutoFlow?: ResponsiveProp<string>;

  // Spacing
  p?: ResponsiveProp<string | number>;
  px?: ResponsiveProp<string | number>;
  py?: ResponsiveProp<string | number>;
  pt?: ResponsiveProp<string | number>;
  pb?: ResponsiveProp<string | number>;
  pl?: ResponsiveProp<string | number>;
  pr?: ResponsiveProp<string | number>;

  m?: ResponsiveProp<string | number>;
  mx?: ResponsiveProp<string | number>;
  my?: ResponsiveProp<string | number>;
  mt?: ResponsiveProp<string | number>;
  mb?: ResponsiveProp<string | number>;
  ml?: ResponsiveProp<string | number>;
  mr?: ResponsiveProp<string | number>;

  // Sizing
  w?: ResponsiveProp<string | number>;
  h?: ResponsiveProp<string | number>;

  bg?: ResponsiveProp<string>;
  radius?: ResponsiveProp<string | number>;
}
