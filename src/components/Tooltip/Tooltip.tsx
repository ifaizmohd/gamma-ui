import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { TooltipContainer } from "./Tooltip.styles";
import type { Props } from "./Tooltip.types";
import { Text } from "@ui/Text";

export const Tooltip: React.FC<Props> = ({
  content,
  placement = "top",
  delay = 300,
  maxWidth,
  children,
  ...textProps
}) => {
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const [mounted, setMounted] = useState(false);
  const timeout = useRef<number>(0);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      window.clearTimeout(timeout.current);
    };
  }, []);

  const show = () => {
    timeout.current = window.setTimeout(() => setVisible(true), delay);
  };

  const hide = () => {
    window.clearTimeout(timeout.current);
    setVisible(false);
  };

  useEffect(() => {
    if (visible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top + rect.height + window.scrollY,
        left: rect.left + rect.width + window.scrollX,
      });
    }
  }, [visible]);

  useEffect(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      console.log("[DEBUG] rect = ", rect);
    }
    console.log("[DEBUG] coords = ", coords);
  }, [coords]);

  const tooltipNode = (
    <TooltipContainer
      ref={tooltipRef}
      role="tooltip"
      placement={placement}
      maxWidth={maxWidth}
      visible={visible}
      style={{
        top: coords.top,
        left: coords.left,
        position: "absolute",
      }}
    >
      <Text {...textProps} size="87">
        {content}
      </Text>
    </TooltipContainer>
  );

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
        tabIndex={0}
        style={{ display: "inline-block" }}
      >
        {children}
      </div>
      {mounted && createPortal(tooltipNode, document.body)}
    </>
  );
};
