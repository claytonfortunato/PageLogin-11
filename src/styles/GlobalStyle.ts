import { createGlobalStyle } from "styled-components";

import background from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    #root {
        min-height: 100vh;
        min-width: 28rem;

        background-color: ${(props) => props.theme.colors.gray50};

        @media (min-width: 832px) {
            display: flex;

            &::after {
            content: '';
            display: block;
            width: 50%;
            min-height: 100vh;

            background: url(${background}) no-repeat;
            background-size: cover;
            }
            
        }
    }
`;
