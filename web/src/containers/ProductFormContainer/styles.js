import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  h1 {
    font-weight: normal;
    text-align: center;
    margin: 55px 60px;
  }
  fieldset {
    margin: auto;
    padding: 0 10px;
    border: 0;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  input {
    height: 70px;
    padding: 15px 24px;
    margin-top: 5px;
    border: 0;
    border-radius: 10px;
    color: #3a3a3a;
    border: 2px solid #fff;
  }
`;

export const ErrorMessage = styled.span`
  color: #ff4c4c;
  font-weight: bold;
  margin: 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  background: #04d361;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    background: "#03a84d";
  }
`;

export const Load = styled.div`
display: flex;
margin-top: 15px;
img{
  height:35px;
  width: 35px;
  margin: auto;
}

`;
