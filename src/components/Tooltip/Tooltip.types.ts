import type { TextProps } from "@ui/Text";

interface TooltipProps {
  /** Tooltip text or node */
  content: React.ReactNode;
  /** Placement of the tooltip */
  placement?: "top" | "bottom" | "left" | "right";
  /** Delay in ms before showing the tooltip */
  delay?: number;
  /** Optional custom max width */
  maxWidth?: string | number;
  /** Child element that triggers the tooltip */
  children: React.ReactNode;
}

export type Props = TooltipProps & TextProps;
