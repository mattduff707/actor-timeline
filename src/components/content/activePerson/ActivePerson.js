import React from 'react';
import styled from 'styled-components';
import Details from './details/Details';

const ActivePerson = () => {
  return (
    <Wrapper>
      <Details />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ActivePerson;
