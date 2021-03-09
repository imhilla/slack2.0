import React, { useRef, useEffect } from 'react';
import { StarBorderOutlined, InfoOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/app';
import ChatInput from '../Components/ChatInput';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Message from '../Components/Message';
import { current } from 'immer';

export default function Chat() {
  const chatRef = useRef(null);

  const roomId = useSelector(selectRoomId);

  const [roomDetails] = useDocument(
    roomId && db.collection('rooms').doc(roomId)
  )

  const [roomMessages, loading] = useCollection(
    roomId && db.collection('rooms').doc(roomId).collection('messages')
  )

  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    })
  }, [roomId, loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessages && (
        <>
          <Header>
            <HeaderLeft>
              <h4><strong>#{roomDetails?.data().name}</strong></h4>
              <StarBorderOutlined />
            </HeaderLeft>
            <HeaderRight>
              <p>
                <InfoOutlined /> Details
          </p>
            </HeaderRight>
          </Header>
          <ChatMessages>
            {roomMessages?.docs.map(doc => {
              const { message, timestamp, user, userImage } = doc.data();
              console.log(message)
              return (
                <Message
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage}
                />
              )
            })}
            <ChatBottom ref={chatRef} />
          </ChatMessages>
          <ChatInput
            chatRef={chatRef}
            channelName={roomDetails?.data().name}
            channelId={roomId}
          />
        </>
      )}

    </ChatContainer>
  )
}

const Header = styled.div`
  display:flex;
  justify-content:space-between;
  padding:20px;
  border-bottom: 1px solid lightgray;
`

const ChatBottom = styled.div`
  padding-bottom: 200px;
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