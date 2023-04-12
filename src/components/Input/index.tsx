import { Eye } from "phosphor-react";

import * as C from "./styles";

interface InputProps {
  label: string;
  name: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, name }: InputProps) => {
  return (
    <C.Container>
      <C.LabelWrapper>
        <label htmlFor={name}>{label}</label>
      </C.LabelWrapper>
      <C.InputWrapper>
        <input type="text" placeholder={placeholder} />
      </C.InputWrapper>
    </C.Container>
  );
};
