import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  html, body, #root {
    height: 100%;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: Arial, Helvetica, sans-serif;
  }

  main {
    width: 100%;
    height: 100%;

    display: flex;

    justify-content: center;
    align-items: center;

    background-color: #030712;
  }

`;
