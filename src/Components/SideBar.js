import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create';
import SideBarOption from './SideBarOption';
import { useCollection } from 'react-firebase-hooks/firestore';
import { BookmarkBorder, ExpandLess, PeopleAlt, InsertComment, FileCopy, Inbox, Apps, ExpandMore, Add } from '@material-ui/icons';
import { db } from '../firebase';

function SideBar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'))

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Hillary FAM</h2>
          <h3>
            <FiberManualRecordIcon />
            Hillary Kiptoo
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>

      <SideBarOption Icon={InsertComment} title="Threads" />
      <SideBarOption Icon={Inbox} title="Mentions & reactions" />
      <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
      <SideBarOption Icon={PeopleAlt} title="People and user groups" />
      <SideBarOption Icon={Apps} title="Apps" />
      <SideBarOption Icon={FileCopy} title="file browser" />
      <SideBarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SideBarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SideBarOption Icon={Add} addChannelOption title="Add channels" />
      {channels?.docs.map((doc) => (
        <SideBarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = styled.div`
   background-color: var(--slack-color);
   color: white;
   flex: 0.3;
   border-top: 1px solid #49274b;
   max-width: 260px;
   margin-top: 60px;

   >hr {
     margin-top: 10px;
     margin-bottom: 10px;
     border: 1px solid #49274b;
   }
`

const SideBarHeader = styled.div`
   display: flex;
   border-bottom: 1px solid #49274b;
   border-bottom: 10px;
   padding: 13px;

   >.MuiSvgIcon-root {
      padding: 8px;
      color: #49274b;
      font-size: 18px;
      background-color: white;
      border-radius: 999px;
   }
`

const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-weight: 400;
    font-size: 13px;
    align-items: center;
  }

  >h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`