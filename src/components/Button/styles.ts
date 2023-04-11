import styled from "styled-components";

export const Container = styled.button`
  width: 100%;

  padding: 1.4rem;
  outline: none;
  border: none;
  font-weight: 600;

  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.purple700};
  border-radius: 4px;

  cursor: pointer;
  transition: 200ms all ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.purple500};
  }
`;
