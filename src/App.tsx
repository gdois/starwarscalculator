import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './components/style';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
