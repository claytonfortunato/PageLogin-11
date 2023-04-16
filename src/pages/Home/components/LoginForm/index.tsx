import { useForm, FormProvider } from "react-hook-form";

import * as C from "./styles";
import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

export const LoginForm = () => {
  const {
    loginForm,
    formState: { errors },
  } = useForm();

  return (
    <FormProvider {...loginForm}>
      <C.Container>
        <Input label="E-mail" placeholder="Digite seu e-mail" name="email" />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          name="password"
          type="password"
          error={loginForm.formState?.errors?.email?.type}
        />
        <Button label="Entrar" type="submit" />
      </C.Container>
    </FormProvider>
  );
};
