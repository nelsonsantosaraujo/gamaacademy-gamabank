import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <img src="https://placeholder.com/291x65" alt="GamaAcademy Logo"/>
      <div>
        <div>
          <p>
            Gama Bank é um projeto de nossos alunos.
            Já tem conta?
          </p>
          <button>
            Acessar
          </button>
        </div>
        <div>
          <p>
            Peça sua conta e cartão de crédito do Gama Bank
          </p>
          <form>
            <input type="text" placeholder="Digita seu CPF" />
            <input type="text" placeholder="Escolha um nome de usuário" />
            <input type="text" placeholder="Nome completo" />
            <input type="text" placeholder="Digite sua senha" />
            <input type="text" placeholder="Confirme sua senha" />
            <button>
              Continuar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Home;