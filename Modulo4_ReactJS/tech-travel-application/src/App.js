import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routing from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
