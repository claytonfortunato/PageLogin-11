import styled from "styled-components";

export const Container = styled.div`
  margin-top: 3.2rem;
  color: ${(props) => props.theme.colors.gray600};
  font-size: 16px;

  a {
    font-weight: 700;
    text-decoration: none;
    color: ${(props) => props.theme.colors.purple700};

    &:hover {
      text-decoration: underline;
    }
  }
`;
