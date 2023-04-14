import { InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";

import { Eye, EyeSlash } from "phosphor-react";

import * as C from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, name, type }: InputProps) => {
  const [hidden, setHidden] = useState(true);

  const recoverPassword = <a href="#">Esqueceu a senha?</a>;

  const Icon = hidden ? <EyeSlash /> : <Eye />;

  const obtainInputActualType = () => {
    if (type !== "password") {
      return type;
    }

    return hidden ? "password" : "text";
  };

  return (
    <C.Container>
      <C.LabelWrapper>
        <label htmlFor={name}>{label}</label>
        {type === "password" ? recoverPassword : <></>}
      </C.LabelWrapper>
      <C.InputWrapper>
        <input id={name} />

        {type === "password" ? Icon : <></>}
      </C.InputWrapper>
    </C.Container>
  );
};
