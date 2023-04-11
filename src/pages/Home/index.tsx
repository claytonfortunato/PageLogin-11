import logo from "../../assets/logo.svg";
import { LoginForm } from "./components/LoginForm";

import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <C.Header>
        <img src={logo} alt="" />
      </C.Header>
      <C.Wrapper>
        <h2>Acesse a plataforma</h2>
        <h3>
          Faça login ou registre-se para começar a construir seus projetos ainda
          hoje.
        </h3>
      </C.Wrapper>
      <LoginForm />
    </C.Container>
  );
};
