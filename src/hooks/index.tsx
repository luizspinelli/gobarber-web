/* eslint-disable react/prop-types */
import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppContext: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      {children}
    </ToastProvider>
  </AuthProvider>
);

export default AppContext;
