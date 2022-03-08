import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        min-height: 100vh;
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
    }
`;
