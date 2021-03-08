import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTimeIcon />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>

      {/* Header Right */}
    </HeaderContainer>
  )
}

const HeaderSearch = styled.div`
   flex:0.4;
   opacity: 1;
   border-radius: 6px;
   background-color: #421f40;
   text-align: center;
   padding: 0 50px;
   color: gray;
   border: 1px gray solid;
    > input {
      background-color: transparent;
      border: none;
      text-align: center;
      min-width: 30vw; 
      outline: 0;
      color: white;
    }
`
const HeaderContainer = styled.div`
   display: flex;
   position: fixed;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding:10px 0;
   background-color: var(--slack-color);
   color: white;
   `;
const HeaderLeft = styled.div`
   flex: 0.3; 
   display: flex;
   align-items: center;
   margin-left: 30px;

   > .MuiSvgIcon-root {
     margin-left: auto;
     margin-right: 30px;
   }
`
const HeaderAvatar = styled(Avatar)`
cursor: pointer;
:hover {
  opacity: 0.8;
}
`;