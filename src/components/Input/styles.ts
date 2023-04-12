import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const LabelWrapper = styled.div`
  margin-bottom: 0.8rem;

  label {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  padding: 1.3rem;
  margin-bottom: 32px;

  border: 1px solid ${(props) => props.theme.colors.gray200};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};

  transition: all 200ms linear;

  input {
    width: 100%;

    border: none;
    outline: none;

    font-size: 1.4rem;

    color: ${(props) => props.theme.colors.gray800};

    &::placeholder {
      color: ${(props) => props.theme.colors.gray400};
    }
  }
`;
