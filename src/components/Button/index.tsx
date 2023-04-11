import { ButtonHTMLAttributes } from "react";
import * as C from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label }: ButtonProps) => {
  return <C.Container>{label}</C.Container>;
};
