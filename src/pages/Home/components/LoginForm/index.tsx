import { useForm } from "react-hook-form";

import * as C from "./styles";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

export const LoginForm = () => {
  return (
    <C.Container>
      <Input label="E-mail" placeholder="Digite seu e-mail" name="email" />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        name="password"
        type="password"
      />
      <Button label="Entrar" type="submit" />
    </C.Container>
  );
};
