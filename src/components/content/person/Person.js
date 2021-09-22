import React from 'react';
import styled from 'styled-components';
import Details from './details/Details';
import Navbar from './timelineNav/Navbar';
import TimeLine from './timeline/TimeLine';

const Person = ({ activePerson }) => {
  const roles = activePerson.movie_credits.cast.filter((role) => role.release_date);

  return (
    <Wrapper>
      <Details activePerson={activePerson} />
      <Navbar roles={roles} />
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
