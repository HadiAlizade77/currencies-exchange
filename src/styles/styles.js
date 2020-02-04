import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleElement = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    color: #ebecec;
    background-color: #2424a4;
  }
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const WrapperDivElement = styled.div`
flex-basis: 100%;
text-align: center;
border-bottom: 2px solid #8c8cd4;
margin: 10px;
padding: 20px;
`;

export const InputElement = styled.input`
border: 3px solid ${(props) => (props.isValidationError ? '#c4215f' : 'none')};
padding: 2px;
margin: 2px;
outline: none;
`;

export const HeaderElement = styled.header`
flex-basis: 100vw;
font-size: 50px;
text-align: center;
margin: 20px 5px;
`;
