export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  backdrop?: boolean;
  closeOnBackdropClick?: boolean;
  ariaLabel?: string;
}

export interface ModalSizeMap {
  sm: string;
  md: string;
  lg: string;
}
