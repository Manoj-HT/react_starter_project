import { CSSProperties, ReactNode, SyntheticEvent } from "react";

// general purpose
type ChildrenTypeProps = {
  children: ReactNode;
};

//components


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

