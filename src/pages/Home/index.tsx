import React, { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import Logo from '../../assets/gamaacademy-logo.svg';

import { Container, Content, Form } from './style';

import api from '../../services/api';

interface FormData {
  cpf: string;
  login: string;
  nome: string;
  senha: string;
}

const Home: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const history = useHistory();

  function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const postData: FormData = {
      cpf,
      login: username,
      nome: name,
      senha: password,
    }

    if(password !== confirmPassword) {
      alert('Confirm Password');
      return;
    }

    try{
      api.post(`usuarios`, postData).then(
        response => {
          if(response.status === 200){
            history.push('/signin');
          } else {
            alert('Algo deu errado tente novamente em alguns minutos.')
          }
        }
      );
    }catch(err){
      alert('Algo deu errado');
    }

  }

  return (
    <Container>
      <img src={Logo} alt="GamaAcademy Logo"/>
      <Content>
        <div>
          <p>
            Gama Bank é um projeto de nossos alunos.
            Já tem conta?
          </p>
          <Link to="/signin">
            Acessar
          </Link>
        </div>
        <Form onSubmit={createAccount}>
          <p>
            Peça sua conta e cartão de crédito do Gama Bank
          </p>
          <input 
            type="text" 
            placeholder="Digita seu CPF"
            value={cpf}
            onChange={e => {setCpf(e.target.value)}}
          />
          <input 
            type="text" 
            placeholder="Escolha um nome de usuário"
            value={username}
            onChange={e => {setUsername(e.target.value)}}
          />
          <input 
            type="text" 
            placeholder="Nome completo" 
            value={name}
            onChange={e => {setName(e.target.value)}}
          />
          <input 
            type="text" 
            placeholder="Digite sua senha"
            value={password}
            onChange={e => {setPassword(e.target.value)}}
          />
          <input 
            type="text" 
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={e => {setConfirmPassword(e.target.value)}}
          />
          <button type="submit">
            Continuar
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default Home;