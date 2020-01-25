import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleElement = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    color: #ebecec;
  }
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #1f2835;
`;
