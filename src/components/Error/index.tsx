import React from 'react'
import { Link } from 'react-router-dom';

import { Container, Content } from './style';

const Error = () => {
  return (
    <Container>
      <Content>
        <i>Icon</i>
        <p>Oops, algo deu errado!</p>
        <p>Confirme seus dados e tente novamente!</p>
        <Link to="/">Voltar</Link>
      </Content>
    </Container>
  )
}

export default Error;