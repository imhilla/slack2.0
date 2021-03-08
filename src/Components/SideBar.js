import React from 'react'
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import CreateIcon from '@material-ui/icons/Create';

function SideBar() {
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
` 