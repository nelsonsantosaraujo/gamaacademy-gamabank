import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/gamaacademy-logo.svg';

import { Container, Content, Form } from './style';

const ForgotPassword: React.FC = () => {
  return (

    <Container>
      <img src={Logo} alt="GamaAcademy Logo"/>
      <Content>
        <Form>
          <p>Esqueci minha senha</p>
          <small>Confirme seu CPF e escolha sua nova senha.</small>
          <input type="text" placeholder="Confirme seu CPF" />
          <input type="text" placeholder="Digite sua nova senha" />
          <input type="text" placeholder="Confirme sua nova senha" />
          <Link to="/signin">Enviar</Link>
        </Form>
      </Content>
    </Container>
  )
}

export default ForgotPassword;