import React from 'react';
import styled from 'styled-components';

export default function ChatInput({ channelName, channelId }) {
  
  
  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message Room`} />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

const ChatInputContainer = styled.div``