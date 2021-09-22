import React from 'react';
import styled from 'styled-components';
import Details from './details/Details';
import Navbar from './timelineNav/Navbar';
import TimeLine from './timeline/TimeLine';

const Person = ({ activePerson }) => {
  return (
    <Wrapper>
      <Details activePerson={activePerson} />
      <Navbar />
      <TimeLine />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 4px solid red; */
`;

export default Person;
