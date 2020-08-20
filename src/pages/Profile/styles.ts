import Styled from "styled-components";
import { shade } from "polished";

export const Container = Styled.div`
  >header {
    height: 144px;
    background: #28262e;

    display: flex;
    align-items: center;

    div {
      width: 100%;
      max-width: 1120px;
      margin: 0 auto;

      svg {
        width: 24px;
        height: 24px;
        color: #999591;
      }
    }
  }
`;

export const Content = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -100px auto 0;


  width: 100%;


  form {
    margin-top: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      margin-bottom: 24px;
      text-align: left;
      font-size: 20px
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")}
      }
    }
  }
`;

export const AvatarInput = Styled.div`
  margin-bottom: 32px;
  position: relative;
  width: 186px;
  align-self: center;
  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  button {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #ff9000;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border:0;
    transition: background-color 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;


    svg {
      width: 20px;
      height: 20px;
      color: #312e38;
    }

    &:hover{
      background: ${shade(0.2, "#ff9000")}
    }
  }
`;
