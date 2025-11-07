export type SkeletonProps = {
  /** Whether to show skeletons */
  isLoading: boolean;
  /** Children to render once loaded */
  children: React.ReactNode;
  /** If true, skeleton dynamically adapts to child size using ResizeObserver */
  adaptive?: boolean;
  /** Optional border radius override */
  borderRadius?: string | number;
  /** Optional custom class name */
  className?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
};
