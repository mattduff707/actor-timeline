import React from 'react';
import styled from 'styled-components';
import Details from './details/Details';
import Navbar from './timelineNav/Navbar';

const ActivePerson = () => {
  return (
    <Wrapper>
      <Details />
      <Navbar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ActivePerson;
