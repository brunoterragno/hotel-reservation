import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100vh;
        font-size: 62.5%;
        overflow-x: hidden;
        scroll-behavior: smooth;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Poppins', sans-serif;
        min-width: 320px;
    }

    a {
    text-decoration: none;
    outline: none;
    }

    button {
        cursor: pointer;
    }

`;
