import styled from "styled-components";
import { Actionable } from "../Actionable";

export const StyledLink = styled(Actionable)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.link};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  background: transparent;
  text-decoration: none;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  &:focus-visible {
    outline: 2px solid var(--border-focus);
    outline-offset: 2px;
  }

  &[aria-disabled="true"] {
    opacity: var(--state-disabled-opacity);
    pointer-events: none;
  }

  &.underline {
    text-decoration: underline;
  }

  &.button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-brand-primary);
    color: var(--text-inverse);
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.hover};
    }
  }
`;
