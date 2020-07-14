import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';
import AppContext from './hooks';
// import SignUp from './pages/SignUp';

const App: React.FC = () => (
  <>
    <AppContext>
      <SignIn />
    </AppContext>
    <GlobalStyled />
  </>
);

export default App;
