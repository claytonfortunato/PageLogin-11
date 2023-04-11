import { useForm } from "react-hook-form";

import * as C from "./styles";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

interface FormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  return (
    <C.Container>
      <Input />
      <Input />
      <Button label="Entrar" type="submit" />
    </C.Container>
  );
};
