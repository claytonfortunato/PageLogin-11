import styled from "styled-components";

interface InputWrapperProps {
  disabled?: boolean;
  error: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const LabelWrapper = styled.div`
  margin-bottom: 0.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;

  padding: 1.3rem;
  margin-bottom: 32px;

  border: 1px solid ${(props) => props.theme.colors.gray200};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.white};

  transition: all 200ms linear;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

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

  svg {
    width: 2.4rem;
    height: 2.4rem;
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray400};
  }
  &:hover,
  &:focus-within {
    border-color: ${(props) => props.theme.colors.purple700};
  }
`;

export const InvalidMessage = styled.span`
  font-size: 16px;
  color: ${(props) => props.theme.colors.error};
`;
