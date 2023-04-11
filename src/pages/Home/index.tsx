import logo from "../../assets/logo.svg";

import * as C from "./styles";

export const Home = () => {
  return (
    <C.Container>
      <C.Header>
        <img src={logo} alt="" />
      </C.Header>
      <h2>Acesse a plataforma</h2>
      <p>
        Faça login ou registre-se para começar a construir seus projetos ainda
        hoje.
      </p>
    </C.Container>
  );
};
