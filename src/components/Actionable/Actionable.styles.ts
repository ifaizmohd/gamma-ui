import styled, { css, keyframes } from "styled-components";

const rippleAnimation = keyframes`
  to {
    transform: scale(4);
    opacity: 0;
  }
`;

export const StyledActionable = styled.button<{ $disabled?: boolean }>`
  all: unset;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  border-radius: 8px;
  transition: background-color 0.2s, opacity 0.2s, box-shadow 0.2s;

  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
      opacity: var(--state-disabled-opacity);
      cursor: not-allowed;
    `}

  &:focus-visible {
    outline: 2px solid var(--state-focus-ring-color);
    outline-offset: 2px;
  }

  &:hover:not(:disabled) {
    background-color: rgba(0, 0, 0, var(--state-hover-opacity));
  }

  .ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(0);
    animation: ${rippleAnimation} 600ms linear;
    pointer-events: none;
  }
`;
