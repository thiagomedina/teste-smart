import styled from 'styled-components';

export const Container = styled.header`
  padding: 30px 0;
  background: #28262e;
  display: flex;
  align-items: center;
  



`;

export const Links = styled.div`
margin-left: 40px;
a{
  text-decoration: none;
  margin-right: 10px;
  color: #cccc;
  font-size: 20px;


  &:hover{
      color: whitesmoke;
      transition: 0.5s;
  }
}
`;