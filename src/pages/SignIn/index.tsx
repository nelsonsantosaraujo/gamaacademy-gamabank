import React, { FormEvent, useState} from 'react'
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/gamaacademy-logo.svg';

import { Container, Content, Form } from './style';

import api from '../../services/api';

interface FormData {
  usuario: string;
  senha: string;
}

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData: FormData = {
      usuario: username,
      senha: password,
    }
    
    api.post(`login`, formData)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('@tokenApp', response.data.token);
        // history.push('/dashboard');
      });
  }

  return (
    <Container>
      <img src={Logo} alt="GamaAcademy Logo"/>
      <Content>
        <Form onSubmit={handleLogin}>
          <p>Faço seu login</p>
          <input 
            type="text" 
            placeholder="Digite seu usuário"
            value={username}
            onChange={e => {setUsername(e.target.value)}}
          />
          <input 
            type="text" 
            placeholder="Digite sua senha"
            value={password}
            onChange={e => {setPassword(e.target.value)}}
          />
          <button type="submit">Continuar</button>
        </Form>
        <Link to="/forgot-password">Esqueci minha senha</Link>
        <Link to="/">Ainda não sou cliente</Link>
      </Content>
    </Container>
  )
}

export default SignIn;