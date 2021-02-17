import React from 'react'

import { Container, Content } from './style';

const Error = () => {
  return (
    <Container>
      <Content>
        <i>Icon</i>
        <p>Oops, algo deu errado!</p>
        <p>Confirme seus dados e tente novamente!</p>
        <button>Voltar</button>
      </Content>
    </Container>
  )
}

export default Error;