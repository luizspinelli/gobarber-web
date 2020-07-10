import Styled from 'styled-components';
import { shade } from 'polished';
import sigInBackfroundImg from '../../assets/sign-in-background.png';

export const Container = Styled.div`

  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = Styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;

  place-content: center;

  width: 100%
  max-width: 700px;
  margin: 0 150px 0 150px;

  form {
    margin-top: 80px;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')}
      }
    }
  }
    > a {
      color: #ff9000;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      display: flex;
      align-items: center;

      &:hover {
        color: ${shade(0.2, '#ff9000')}
      }

      svg {
        margin-right: 16px;
      }
    }


`;
export const Background = Styled.div`
  flex: 1;
  background: url(${sigInBackfroundImg}) no-repeat center;
  background-size: cover;
`;
