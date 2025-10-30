import React, { useEffect, useRef, useState } from "react";
import type { ActionableProps, Ref } from "./Actionable.types";
import { StyledActionable } from "./Actionable.styles";

export const Actionable = React.forwardRef(
  (
    {
      as,
      href,
      tabIndex,
      disabled,
      onClick,
      children,
      rippleColor,
      attributes,
      type,
      ...props
    }: ActionableProps,
    ref: Ref
  ) => {
    const containerRef = useRef<HTMLElement | null>(null);
    const [ripples, setRipples] = useState<
      { x: number; y: number; size: number; key: number; color?: string }[]
    >([]);
    const clickHandler =
      onClick || (attributes?.onClick as ActionableProps["onClick"]);
    const isLink = Boolean(href);
    const isButton = Boolean(clickHandler);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let TagName: any;
    const rootAttributes: ActionableProps["attributes"] = {};
    if (isLink) {
      if (disabled) {
        rootAttributes["aria-disabled"] = true;
        rootAttributes.role = "link";
        delete rootAttributes.href;
      } else {
        if (href) {
          rootAttributes.href = href;
          rootAttributes["tabIndex"] = tabIndex || 0;
        }
      }
      TagName = as || "a";
      delete rootAttributes.disabled;
    } else if (isButton && (!as || as === "button")) {
      TagName = StyledActionable;
      rootAttributes.type = type || attributes?.type || "button";
      rootAttributes.disabled = disabled || attributes?.disabled;
      rootAttributes.role = "button";
    } else {
      const focusHandler = attributes?.onFocus || attributes?.onBlur;
      const isFocusable = as === "label";
      const simulateButton = !isFocusable || clickHandler || focusHandler;
      TagName = as || "button";
      rootAttributes.role = simulateButton ? "button" : undefined;
      rootAttributes.tabIndex = simulateButton ? tabIndex || 0 : undefined;
      rootAttributes.disabled = disabled || attributes?.disabled;
    }

    // cleanup ripples after animation
    useEffect(() => {
      if (ripples.length === 0) return;
      const t = window.setTimeout(() => setRipples([]), 650);
      return () => clearTimeout(t);
    }, [ripples]);

    // helper to create ripple
    const createRipple = (event: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;
      setRipples((prev) => [
        ...prev,
        { x, y, size, key: Date.now(), color: rippleColor },
      ]);
    };

    // keyboard activation (Enter/Space)
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      // Space should trigger click on keyup for native buttons, but for non-button we simulate
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // trigger click programmatically
        (containerRef.current as HTMLElement | null)?.click();
      }
    };

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        createRipple(e);
        onClick(e);
      }
    };

    /* Notes on attributes:
       - If the underlying element is a native <button>, pass disabled attribute so browser handles it.
       - If it's not a button (e.g. 'a' or 'div'), set aria-disabled and tabIndex accordingly.
    */
    const isButtonElement =
      as === "button" ||
      (typeof as === "string" && as.toLowerCase() === "button");

    return (
      <TagName
        as={as as string}
        ref={ref}
        role={isButtonElement ? undefined : "button"}
        aria-disabled={disabled ? true : undefined}
        tabIndex={disabled ? -1 : tabIndex ?? 0}
        $disabled={disabled}
        // only add native disabled attribute when rendering an actual <button>
        {...(isButtonElement ? { disabled } : {})}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...(props as object)}
      >
        {children}
        {ripples.map(({ x, y, size, key, color }) => (
          <span
            key={key}
            className="ripple"
            style={{
              width: size,
              height: size,
              top: y,
              left: x,
              backgroundColor: color ?? "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </TagName>
    );
  }
);
