import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';

const MovieYear = ({ year }) => {
  return (
    <Wrapper id={year}>
      <YearBtn>{year}</YearBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const YearBtn = styled(Btn)`
  z-index: 10;
  padding: 5px 30px;
  font-size: 1.2rem;
`;

export default MovieYear;
