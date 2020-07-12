import React from 'react';
import GlobalStyled from './styles/global';
import SignIn from './pages/Signin';
// import SignUp from './pages/SignUp';

import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyled />
  </>
);

export default App;
