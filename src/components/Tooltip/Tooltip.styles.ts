import styled, { keyframes, css } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(4px); }
`;

export const TooltipContainer = styled.div<{
  visible: boolean;
  placement: string;
  maxWidth?: string | number;
}>`
  position: absolute;
  z-index: 1000;
  background-color: var(--color-neutral-900);
  color: var(--text-inverse);
  padding: var(--unit-1) var(--unit-2);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  white-space: nowrap;
  max-width: ${({ maxWidth }) =>
    typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth || "240px"};
  text-align: center;
  pointer-events: none;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ visible }) =>
    visible
      ? css`
          ${fadeIn} 0.15s ease-out
        `
      : css`
          ${fadeOut} 0.15s ease-in
        `};

  /* ${({ placement }) =>
    placement === "top" &&
    css`
      transform: translateX(0) translateY(-120%);
    `}
  ${({ placement }) =>
    placement === "bottom" &&
    css`
      transform: translateX(0) translateY(168%);
    `}
  ${({ placement }) =>
    placement === "left" &&
    css`
      transform: translateY(0) translateX(-105%);
    `}
  ${({ placement }) =>
    placement === "right" &&
    css`
      transform: translateY(0) translateX(100%);
    `} */
`;
