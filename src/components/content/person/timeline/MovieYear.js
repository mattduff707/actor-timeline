import React from 'react';
import styled from 'styled-components';
import Heading from '../../../Heading';

const MovieYear = ({ year }) => {
  return (
    <Wrapper id={year}>
      <Year label={`Year ${year}`} tag="h3">
        {year}
      </Year>
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
const Year = styled(Heading)`
  z-index: 10;
  padding: 5px 30px;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  border: 6px solid ${(props) => props.theme.colors.primaryDark};
`;

export default MovieYear;
