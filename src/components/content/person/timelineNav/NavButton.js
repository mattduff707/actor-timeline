import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';

const NavButton = ({ year }) => {
  return (
    <YearLink href={`#${year}`}>
      <YearBtn>{year}</YearBtn>
    </YearLink>
  );
};

const YearLink = styled.a`
  margin: 0px 10px;
`;
const YearBtn = styled(Btn)`
  width: 80px;
`;

export default NavButton;
