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
>img {
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
}
`