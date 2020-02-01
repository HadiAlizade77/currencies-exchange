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
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-around; */
  background-color: #1f2835;
`;

export const InputElement = styled.input`
border: 2px solid ${(props) => (props.isValidationError ? 'red' : 'black')};
padding: 2px;
margin: 2px;
outline: none;
`;
