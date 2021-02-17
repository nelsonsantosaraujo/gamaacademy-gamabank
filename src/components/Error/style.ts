import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  max-width: 455px;
  background: #fbfbfb;
  border-radius: 8px;
`;