import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  padding: 11rem 1.6rem 1.6rem;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 416px) {
    max-width: 416px;
    margin: 0 auto;
  }

  @media (min-width: 832px) {
    flex-grow: 1;
  }
`;

export const Header = styled.div`
  height: 5.4rem;

  position: absolute;
  top: 4rem;
  left: 1.6rem;
  right: 1.6rem;

  background-color: ${(props) => props.theme.colors.gray50};

  img {
    height: 100%;
  }
`;
