import { useLayoutEffect, useRef, useState } from "react";
import { StyledSkeleton } from "./Skeleton.styles";
import type { SkeletonProps } from "./Skeleton.types";

export const Skeleton: React.FC<SkeletonProps> = ({
  isLoading,
  adaptive = false,
  borderRadius,
  children,
  className,
  style,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width?: number; height?: number }>({});

  // If adaptive, measure the child element dynamically
  useLayoutEffect(() => {
    if (!adaptive || !ref.current) return;
    const el = ref.current;
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [adaptive]);

  if (!isLoading) return <>{children}</>;
  // If adaptive, use measured dimensions
  if (adaptive) {
    return (
      <div
        ref={ref}
        className={className}
        style={{
          position: "relative",
          display: "inline-block",
          width: "100%",
          ...style,
        }}
      >
        <StyledSkeleton
          $width={size.width}
          $height={size.height}
          $borderRadius={borderRadius}
        />
      </div>
    );
  }
  // Otherwise use visibility-based skeleton (keeps layout static)
  return (
    <div
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        ...style,
      }}
    >
      <div style={{ visibility: isLoading ? "hidden" : "visible" }}>
        {children}
      </div>
      {isLoading && (
        <StyledSkeleton
          style={{ position: "absolute", inset: 0 }}
          $borderRadius={borderRadius}
        />
      )}
    </div>
  );
};
