import React from 'react';
import styled from 'styled-components';

export default function SideBarOption({ Icon, title }) {
  return (
    <SideBarOptionContainer>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span>{title}
        </SideBarOptionChannel>)
      }
    </SideBarOptionContainer >
  )
}
const SideBarOptionContainer = styled.div`
  display:flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  
`;
const SideBarOptionChannel = styled.div``;