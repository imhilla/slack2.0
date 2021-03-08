import React from 'react';
import styled from 'styled-components';

export default function Chat() {
  return (
    <ChatContainer>
      <h1>I am the chat screen</h1>
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
`