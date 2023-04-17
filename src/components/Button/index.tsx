import { ButtonHTMLAttributes } from "react";
import * as C from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
  return <C.Container {...rest}>{label}</C.Container>;
}
