import { CSSProperties, ReactNode, SyntheticEvent } from "react";

// general purpose
type ChildrenTypeProps = {
  children: ReactNode;
};

//components
type ButtonProps = {
  theme: "success-full" | "danger-full" | "primary-full" | "success-hollow" | "danger-hollow" | "primary-hollow";
  onClick?: (e: SyntheticEvent) => any;
  onMouseOver?: (e: SyntheticEvent) => any;
  width?: string;
  height?: string;
  children?: ReactNode | string;
};

// animation
type KeyFrameType = CSSProperties & Keyframe;
type AnimationOptionTypes = {
  cssEffects: KeyFrameType[];
  timingOptions: KeyframeAnimationOptions;
};

// form
type InitialFormType = {
  [key: string]: [initialValue: any, ...Validator[]];
};
type FormControlType = {
  value: any;
  validators: Validator[];
  touched: boolean;
  error: boolean;
  name: string;
  valid: boolean;
};
type FormControlObjectType = {
  [key: string]: FormControlType;
};
type ReturnTypeValidator = (...params: any) => (value: any) => boolean;
type ReferenceTypeValidator = (value: any) => boolean;
type Validator = ReturnTypeValidator | ReferenceTypeValidator;
type InputProps = {
  name: string;
  id: string;
  placeholder?: string;
  error?: boolean;
  inputFn?: (e: SyntheticEvent) => void;
  changeFn?: (e: SyntheticEvent) => void;
};
type TextInputProps = InputProps & {};
type EmailInputProps = InputProps & {};
type PasswordInputProps = InputProps & {};
type FormPropsType = {
  formObject: FormControlObjectType;
  children: ReactNode;
  handleInput: (e: SyntheticEvent) => void;
};
