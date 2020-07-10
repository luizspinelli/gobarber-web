import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyled />
  </>
);

export default App;
