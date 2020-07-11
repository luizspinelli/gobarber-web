import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyled />
  </>
);

export default App;
