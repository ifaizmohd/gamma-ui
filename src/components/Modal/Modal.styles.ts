import styled from "styled-components";
import type { ModalSizeMap } from "./Modal.types";

export const Backdrop = styled.div<{ visible: boolean }>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  inset: 0;
  background-color: rgba(17, 24, 39, 0.5); /* fallback overlay */
  background-color: color-mix(
    in srgb,
    var(--color-neutral-900) 50%,
    transparent
  );
  z-index: 999;
`;

const modalSizes: ModalSizeMap = {
  sm: "400px",
  md: "600px",
  lg: "800px",
};

export const ModalContainer = styled.div<{ size: keyof ModalSizeMap }>`
  background-color: ${({ theme }) => theme.colors.surface.modal};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadow.lg};
  width: ${({ size }) => modalSizes[size]};
  color: ${({ theme }) => theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.default};
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: ${({ theme }) => theme.transition.fadeIn};

  @keyframes fadeIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.surface.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.default};
  font-weight: 600;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  flex: 1;
  overflow-y: auto;
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

export const ModalFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border.default};
  background-color: ${({ theme }) => theme.colors.surface.card};
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;
