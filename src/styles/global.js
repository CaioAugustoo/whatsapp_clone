import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
  }
  body {
    color: #000;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    background: #DBDCD4;
  }
  h1, h2, h3, h4, p {
    margin: 0;
  }
  
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }
  button, input {
    display: block;
    font-size: 1rem;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    color: #000;
  }
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const Container = styled.div`
  width: 150rem;
  height: calc(100vh - 40px);
  margin: 20px auto;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.15);
  position: relative;

  @media (max-width: 1200px) {
    margin: 0 auto;
    height: 100vh;
  }

  &::before {
    content: "";
    background-color: #009688;
    width: 100%;
    height: 15rem;
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;
