import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast hasDescripion>
      <FiAlertCircle size={20} />
      <div>
        <strong>Aconteceu um erro</strong>
        <p>Erro na autenticação do usuario</p>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="success" hasDescripion={false}>
      <FiAlertCircle size={20} />
      <div>
        <strong>Aconteceu um erro</strong>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="error" hasDescripion>
      <FiAlertCircle size={20} />
      <div>
        <strong>Aconteceu um erro</strong>
        <p>Erro na autenticação do usuario</p>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;
