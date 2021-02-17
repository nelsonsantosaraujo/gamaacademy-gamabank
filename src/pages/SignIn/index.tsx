import React from 'react'

import Logo from '../../assets/gamaacademy-logo.svg';

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
          <button>Continuar</button>
        </Form>
        <a href="esquecisenha">Esqueci minha senha</a>
        <a href="naosoucliente">Ainda não sou cliente</a>
      </Content>
    </Container>
  )
}

export default SignIn;