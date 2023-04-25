import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        border: none;
        outline: none;
    }

    body {
        font-family: "Poppins";
        background-color: ${(props) =>
				props.theme.colors.background_color};
        color: ${(props) => props.theme.colors.text_color};
    }

    button {
        cursor: pointer;
    }
`;
