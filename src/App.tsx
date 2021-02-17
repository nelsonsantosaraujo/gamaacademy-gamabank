import React from 'react';

import GlobalStyle from './style/global';

import Home from './pages/Home';
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <GlobalStyle />
      <SignIn />
    </>
  );
}

export default App;
