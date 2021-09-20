import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavList = () => {
  return (
    <WrapperList>
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
      <NavButton />
    </WrapperList>
  );
};

const WrapperList = styled.ol`
  padding: 10px 0px;
  display: flex;
  overflow-x: auto;
  background-color: ${(props) => props.theme.colors.primaryDark};
`;

export default NavList;
