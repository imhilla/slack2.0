import React from 'react';
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/app';
import ChatInput from '../Components/ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';

export default function Chat() {
  const roomId = useSelector(selectRoomId);
  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )

  const [roomMessages] = useCollection(
    roomId && db.collection('rooms').doc(roomId).collection('messages').orderBy("timestamp", "desc")
  )

  console.log(roomDetails);

  return (
    <ChatContainer>
      <>
        <Header>
          <HeaderLeft>
            <h4><strong>#Room name</strong></h4>
            <StarBorderOutlined />
          </HeaderLeft>
          <HeaderRight>
            <p>
              <InfoOutlined /> Details
          </p>
          </HeaderRight>
        </Header>
        <ChatMessages>

        </ChatMessages>
        <ChatInput
          channelName={roomDetails?.data().name}
          channelId={roomId}
        />
      </>
    </ChatContainer>
  )
}

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  border-bottom: 1px solid lightgray;
`

const ChatMessages = styled.div``

const HeaderLeft = styled.div`
  display: flex;
  align-items:center;

  > h4 {
    display: flex;
    align-items: center;
    text-transform: lowercase;
    margin-right: 10px;

  > h4 .MuiSvgIcon-root {
    margin-left:10px;
    font-size: 18px;
  }
}
`
const HeaderRight = styled.div`
  >p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  >p .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size:16px;
  }
`

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`