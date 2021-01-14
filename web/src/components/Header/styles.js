import styled from 'styled-components';

export const Container = styled.header`
  padding: 30px 0;
  background: #28262e;
  display: flex;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;