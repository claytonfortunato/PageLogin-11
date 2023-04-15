import { InputHTMLAttributes, useState } from "react";
import { useFormContext } from "react-hook-form";

import { Eye, EyeSlash } from "phosphor-react";

import * as C from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error: string | undefined;
}

export const Input = ({ label, name, type, error }: InputProps) => {
  const [hidden, setHidden] = useState(true);

  const actualType = obtainInputActualType();
  const recoverPassword = <a href="#">Esqueceu a senha?</a>;

  const Icon = hidden ? (
    <EyeSlash onClick={handleToggleHideen} />
  ) : (
    <Eye onClick={handleToggleHideen} />
  );

  function obtainInputActualType() {
    if (type !== "password") {
      return type;
    }

    return hidden ? "password" : "text";
  }

  function handleToggleHideen() {
    setHidden((prevValue) => !prevValue);
  }

  return (
    <C.Container>
      <C.LabelWrapper>
        <label htmlFor={name}>{label}</label>
        {type === "password" ? recoverPassword : <></>}
      </C.LabelWrapper>
      <C.InputWrapper>
        <input id={name} type={actualType} />

        {type === "password" ? Icon : <></>}
      </C.InputWrapper>
    </C.Container>
  );
};
