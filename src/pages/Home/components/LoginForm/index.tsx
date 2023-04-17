import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

import * as C from "./styles";

const loginFormValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email é obrigatório",
    })
    .email("Digite um e-mail válido"),
  password: z.string().min(1, "Senha é obrigatória"),
});

type LoginFormData = z.infer<typeof loginFormValidationSchema>;

export function LoginForm() {
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginFormValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function handleLogin() {
    loginForm.reset();
  }

  return (
    <FormProvider {...loginForm}>
      <C.Container noValidate onSubmit={loginForm.handleSubmit(handleLogin)}>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          onInvalid={() => console.log(123)}
          name="email"
          error={loginForm.formState.errors.email?.message}
        />
        <Input
          label="Senha"
          placeholder="Digite sua senha"
          name="password"
          type="password"
          error={loginForm.formState.errors.password?.message}
        />
        <Button label="Entrar" type="submit" />
      </C.Container>
    </FormProvider>
  );
}
