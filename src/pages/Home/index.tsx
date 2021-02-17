import React from 'react'

import Logo from '../../assets/gamaacademy-logo.svg';

import { Container, Content, Form } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <img src={Logo} alt="GamaAcademy Logo"/>
      <Content>
        <div>
          <p>
            Gama Bank é um projeto de nossos alunos.
            Já tem conta?
          </p>
          <button>
            Acessar
          </button>
        </div>
        <Form>
          <p>
            Peça sua conta e cartão de crédito do Gama Bank
          </p>
          <input type="text" placeholder="Digita seu CPF" />
          <input type="text" placeholder="Escolha um nome de usuário" />
          <input type="text" placeholder="Nome completo" />
          <input type="text" placeholder="Digite sua senha" />
          <input type="text" placeholder="Confirme sua senha" />
          <button>
            Continuar
          </button>
        </Form>
      </Content>
    </Container>
  )
}

export default Home;