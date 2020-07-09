import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyled />
  </>
);

export default App;
