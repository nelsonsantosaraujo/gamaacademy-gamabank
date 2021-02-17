import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  >img {
    position: absolute;
    top: 52px;
    left: 63px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  max-width: 455px;
  background: #fbfbfb;
  border: 1px solid #878686;
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;