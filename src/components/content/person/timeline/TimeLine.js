import React from 'react';
import styled from 'styled-components';
import Line from './Line';
import RoleDetails from './RoleDetails';

const TimeLine = () => {
  return (
    <Wrapper>
      <Line />
      <RoleDetails />
      <RoleDetails isLeft={true} />
      <RoleDetails />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default TimeLine;
