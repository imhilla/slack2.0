import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

export default function Header() {
  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar>
        </HeaderAvatar>
      </HeaderLeft>

      {/* Header Search */}

      {/* Header Right */}
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
 
`;
const HeaderLeft = styled.div`
`
const HeaderAvatar = styled(Avatar)``;