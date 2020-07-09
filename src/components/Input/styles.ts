import Styled from 'styled-components';

export const Container = Styled.div`

  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  width: 100%;
  color: #666360;
  padding: 10px;

  display: flex;
  align-items: center;

  & + div {
      margin-top: 8px;
    }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;
    &::placeholder{
      color: #666360;
    }
  }

  svg {
    margin-right: 10px;

  }

`;
