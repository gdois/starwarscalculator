import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    background: #272b30;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin: 10px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 05px;
  box-shadow: 0px 0px 05px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  margin: 20px;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0;
  border: none;
  font-size: 20px;
  height: 55px;
`;

export const Button = styled.button`
  background-color: #ffe300;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 17px;
  height: 40px;
  margin: 20px;
`;