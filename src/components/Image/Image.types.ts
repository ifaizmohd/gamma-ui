export type ImageStyleProps = {
  /** Sets a fixed aspect ratio (e.g., 16/9, 1/1, etc.) */
  aspectRatio?: number;
  /** Width of the image container */
  width?: string | number;
  /** Height of the image container */
  height?: string | number;
  /** Enables skeleton loading placeholder */
  isLoading?: boolean;
  /** Rounds the image corners */
  radius?: "sm" | "md" | "lg" | "full";
};

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility */
  alt: string;
  /** Defines how the image should fit inside its container */
  fit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  /** Fallback image URL if load fails */
  fallbackSrc?: string;
  /** Enables image to be clickable using Actionable */
  isClickable?: boolean;
}

export type Props = ImageProps & ImageStyleProps;
