import React, { FormEvent, useState} from 'react'
import { Link } from 'react-router-dom';

import Logo from '../../assets/gamaacademy-logo.svg';

import { Container, Content, Form } from './style';

import api from '../../services/api';

const SignIn: React.FC = () => {
  const [,] = useState('');
  const [,] = useState('');

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    api.post(``, {})
      .then(response => {

      });
  }

  return (
    <Container>
      <img src={Logo} alt="GamaAcademy Logo"/>
      <Content>
        <Form onSubmit={handleLogin}>
          <p>Faço seu login</p>
          <input type="text" placeholder="Digite seu usuário" />
          <input type="text" placeholder="Digite sua senha" />
          <button type="submit">Continuar</button>
        </Form>
        <Link to="/forgot-password">Esqueci minha senha</Link>
        <Link to="/">Ainda não sou cliente</Link>
      </Content>
    </Container>
  )
}

export default SignIn;