import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { db } from '../firebase';
import firebase from 'firebase';


export default function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState('')

  const sendMessage = (e) => {
    e.preventDefault(); //prevent refresh
    if (!channelId) {
      return false
    }
    db.collection('rooms').doc(channelId).collection('messages').add({
      message: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: 'Hillary Kiptoo',
      userImage: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F58479445%3Fs%3D400%26v%3D4&imgrefurl=https%3A%2F%2Fgithub.com%2Fimhilla%2Fimhilla&tbnid=KclkEIriTG-KVM&vet=12ahUKEwjMtdues6LvAhUKIDQIHdlqClMQMygLegQIARBB..i&docid=2iHEkiUJcj5IhM&w=400&h=400&itg=1&q=hillary%20kiptoo&ved=2ahUKEwjMtdues6LvAhUKIDQIHdlqClMQMygLegQIARBB'
    })
    setInput('')
  }

  return (
    <ChatInputContainer>
      <form>
        <input onChange={e => setInput(e.target.value)} value={input} placeholder={`Message #${channelName}`} />
        <Button hidden type='submit' onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  )
}

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position:relative;
    display:flex;
    justify-content: center;
  }

  > form input {
    position:fixed;
    bottom:30px;
    width: 60%;
    border: 1px solid gray;
    border-radius:3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`