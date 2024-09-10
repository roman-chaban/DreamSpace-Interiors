import { CSSProperties } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckBoxWrapperProps {
  label: string;
  register: UseFormRegisterReturn;
  style?: CSSProperties;
}
