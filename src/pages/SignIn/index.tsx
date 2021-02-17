import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/gamaacademy-logo.svg';
import Error from '../../components/Error';

import { Container, Content, Form } from './style';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="GamaAcademy Logo"/>
      <Content>
        <Form>
          <p>Faço seu login</p>
          <input type="text" placeholder="Digite seu usuário" />
          <input type="text" placeholder="Digite sua senha" />
          <Link to="/dashboard">Continuar</Link>
        </Form>
        <Link to="/forgot-password">Esqueci minha senha</Link>
        <Link to="/">Ainda não sou cliente</Link>
      </Content>
      {/* <Error /> */}
    </Container>
  )
}

export default SignIn;