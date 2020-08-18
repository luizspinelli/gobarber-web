import React, { useState } from "react";

import { FiPower, FiClock } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from "./styles";
import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Data());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img
              src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
              alt={user.name}
            />
            <div>
              <span>Bem Vindo</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários Agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-Feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
                alt="Luiz Spinelli"
              />
              <strong>Luiz Spinelli</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
                  alt="Luiz Spinelli"
                />
                <strong>Luiz Spinelli</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
                  alt="Luiz Spinelli"
                />
                <strong>Luiz Spinelli</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                14:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
                  alt="Luiz Spinelli"
                />
                <strong>Luiz Spinelli</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                15:00
              </span>

              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/57016585?s=460&u=5e21f897d2ab550c9ac2ca6abdb58d7fde8f67cb&v=4"
                  alt="Luiz Spinelli"
                />
                <strong>Luiz Spinelli</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
