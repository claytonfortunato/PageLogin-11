import * as C from "./styles";

export const Input = () => {
  return (
    <C.Container>
      <C.LabelWrapper>
        <label htmlFor="">Nome</label>
      </C.LabelWrapper>
      <C.InputWrapper>
        <input type="text" />
      </C.InputWrapper>
    </C.Container>
  );
};
