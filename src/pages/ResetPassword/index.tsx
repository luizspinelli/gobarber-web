/* eslint-disable camelcase */
/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useCallback, useRef } from "react";
import { FiLock } from "react-icons/fi";
import { Form } from "@unform/web";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { useHistory, useLocation } from "react-router-dom";
import { Container, Content, Background, AnimationContainer } from "./styles";
import logo from "../../assets/logo.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";
import getValidationErrors from "../../utils/getValidationErrors";
import { useToast } from "../../hooks/toast";
import api from "../../services/api";

interface ResetPasswordFormData {
  password: string;
  password_confirmation: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();
  const location = useLocation();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required("Senha Obrigatório"),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password"), undefined],
            "Confirmação incorreta"
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const token = location.search.replace("?token=", "");

        console.log(token);

        if (!token) {
          throw new Error();
        }

        await api.post("/password/reset", {
          password: data.password,
          password_confirmation: data.password_confirmation,
          token,
        });

        history.push("/");
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(getValidationErrors(error));

          return;
        }

        addToast({
          title: "Erro ao Resetar sennha",
          description:
            "Ocorreu um erro ao tentar resetar a sua senha, tente novamente",
          type: "error",
        });
      }
    },
    [addToast, history, location]
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação de senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default ResetPassword;
