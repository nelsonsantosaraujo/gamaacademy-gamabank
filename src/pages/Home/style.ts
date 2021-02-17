import styled from 'styled-components';

import BackgroundHappy from '../../assets/happy.png';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${BackgroundHappy}) no-repeat bottom center;

  >img {
    position: absolute;
    top: 52px;
    left: 63px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  max-width: 350px;
  background: #fbfbfb;
  border: 1px solid #878686;
  border-radius: 8px;
`;