import { CSSProperties } from "react";
import { TextInputProps, EmailInputProps, PasswordInputProps } from "../types/types";

//styles
const styles: CSSProperties = {
  border: "2px solid",
  padding: "5px 15px",
  borderRadius: "1rem",
  outlineColor: "var(--theme-color-dark-1)",
  borderColor: "var(--theme-color)",
};

//components
export const TextInput = (props: TextInputProps) => {
  const { placeholder, name, id, inputFn, changeFn, error } = props;
  const textStyle = { ...styles };
  const textStyleDanger = { ...styles, borderColor: "var(--danger)" };
  return (
    <input
      type="text"
      style={error ? textStyleDanger : textStyle}
      placeholder={placeholder}
      name={name}
      id={id}
      onInput={inputFn}
      onChange={changeFn}
    />
  );
};

export const EmailInput = (props: EmailInputProps) => {
  const { placeholder, name, id, inputFn, error, changeFn } = props;
  const emailStyle = { ...styles };
  const emailStyleDanger = { ...styles, borderColor: "var(--danger)" };
  return (
    <input
      type="email"
      style={error ? emailStyleDanger : emailStyle}
      placeholder={placeholder}
      name={name}
      id={id}
      onInput={inputFn}
      onChange={changeFn}
    />
  );
};

export const PasswordInput = (props: PasswordInputProps) => {
  const { placeholder, name, id, inputFn, changeFn, error } = props;
  const passwordStyle = { ...styles };
  const passwordStyleDanger = { ...styles, borderColor: "var(--danger)" };
  return (
    <input
      type="password"
      style={error ? passwordStyleDanger : passwordStyle}
      placeholder={placeholder}
      name={name}
      id={id}
      onInput={inputFn}
      onChange={changeFn}
    />
  );
};