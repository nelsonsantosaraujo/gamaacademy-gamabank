import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #8C52E5;
  }

  body, input, button {
    font-size: 16px;
    font-family: Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;