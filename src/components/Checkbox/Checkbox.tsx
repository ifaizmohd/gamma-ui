import React, { useState } from "react";
import type { CheckboxProps } from "./Checkbox.types";
import {
  CheckboxContainer,
  CheckboxBox,
  CheckIcon,
  Label,
} from "./Checkbox.styles";
import { Actionable } from "../Actionable/Actionable";

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  indeterminate = false,
  label,
  labelPosition = "right",
  size = "md",
  ...rest
}) => {
  const [internalChecked, setInternalChecked] = useState(
    defaultChecked ?? false
  );

  const isControlled = typeof checked === "boolean";
  const currentChecked = isControlled ? checked! : internalChecked;

  const toggle = () => {
    if (disabled) return;
    const newChecked = indeterminate ? true : !currentChecked;

    if (!isControlled) setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <CheckboxContainer
      $disabled={disabled}
      $labelPosition={labelPosition}
      {...rest}
    >
      <Actionable
        as="div"
        attributes={{ role: "checkbox" }}
        aria-checked={indeterminate ? "mixed" : currentChecked}
        tabIndex={disabled ? -1 : 0}
        onClick={toggle}
        disabled={disabled}
      >
        <CheckboxBox
          $checked={currentChecked}
          $indeterminate={indeterminate}
          $disabled={disabled}
          $size={size}
        >
          <CheckIcon $checked={currentChecked} $indeterminate={indeterminate}>
            {indeterminate ? "−" : "✓"}
          </CheckIcon>
        </CheckboxBox>
      </Actionable>

      {label && <Label $disabled={disabled}>{label}</Label>}
    </CheckboxContainer>
  );
};
