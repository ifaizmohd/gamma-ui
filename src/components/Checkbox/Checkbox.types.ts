import React from "react";

export interface CheckboxProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  indeterminate?: boolean;
  label?: string | React.ReactNode;
  labelPosition?: "left" | "right";
  size?: "sm" | "md" | "lg";
}
