/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import {
  Container, Content, Background, AnimationContainer,
} from './styles';
import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

interface SignInForm {
  email: string,
  password: string
}

const Signin: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInForm) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('Email Obrigatório').email('Digite um email valido'),
        password: Yup.string().required('Senha Obrigatório'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(error));

        return;
      }

      addToast({
        title: 'Erro ao fazer login na aplicação',
        description: 'Verifique a suas credenciais para fazer logon',
        type: 'error',
      });
    }
  }, [signIn, addToast]);
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="Email" />
            <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
            <Link to="forgot">Esqueci minha senha</Link>
          </Form>

          <Link to="signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Signin;
