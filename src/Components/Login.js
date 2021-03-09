import React from 'react';
import styled from 'styled-components';

export default function Login() {
  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img
          src="http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png"
          alt=""
        />
      </LoginInnerContainer>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`
const LoginInnerContainer = styled.div`
  padding:100px;
  text-align:center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  >img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
`