import styled from "styled-components";

export const Container = styled.div`

  background: #3e3b47;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  border-radius: 10px;
  max-width: 1100px;    
  margin-top: 40px;

  strong {
    color: whitesmoke;
    font-size: 20px;
    font-weight: 400;
  }

  button {
    margin-left: 50px;
    background: transparent;
    border: 0;
    height: 30px;

    svg {
      color: #cccc;
      margin-right: 8px;
      width: 20px;
      height: 20px;
    }
  }
`;

export const Table = styled.div``;

export const Buttons = styled.div`
  margin-left: auto;
`;
