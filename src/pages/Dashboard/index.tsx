import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './style';

const Dashboard: React.FC = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/">
        Voltar
      </Link>
    </>
  )
}

export default Dashboard;