import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Backdrop,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./Modal.styles";
import type { ModalProps } from "./Modal.types";

const portalRoot =
  typeof document !== "undefined"
    ? document.getElementById("modal-root") || document.body
    : null;

export const Modal: React.FC<ModalProps> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
} = ({
  open,
  onClose,
  children,
  size = "md",
  backdrop = true,
  closeOnBackdropClick = true,
  ariaLabel,
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleBackdropClick = () => {
    if (closeOnBackdropClick) onClose();
  };

  if (!portalRoot || !open) return null;

  const modalContent = (
    <Backdrop
      visible={open}
      onClick={backdrop ? handleBackdropClick : undefined}
      aria-modal="true"
      role="dialog"
      aria-label={ariaLabel}
    >
      <ModalContainer size={size} onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContainer>
    </Backdrop>
  );

  return ReactDOM.createPortal(modalContent, portalRoot);
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
