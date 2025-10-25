import {
  ErrorMessage,
  InputContainer,
  Label,
  StyledInput,
} from "./Input.styles";
import type { InputProps } from "./Input.types";

export const Input: React.FC<InputProps> = ({
  variant = "outlined",
  inputSize = "md",
  error = false,
  fullWidth = false,
  label,
  errorMessage,
  ...props
}) => {
  return (
    <InputContainer className="input-container">
      <StyledInput
        variant={variant}
        inputSize={inputSize}
        error={error}
        fullWidth={fullWidth}
        id="input-component"
        placeholder=" "
        {...props}
      />
      <Label htmlFor="input-component">{label}</Label>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
