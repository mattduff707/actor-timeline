import React from 'react';
import styled from 'styled-components';
import LinePoint from './LinePoint';
import MovieLabel from './MovieLabel';
import MovieDetailsBox from './MovieDetailsBox';

const RoleDetails = ({ isLeft }) => {
  return (
    <Wrapper>
      {isLeft ? <MovieDetailsBox isLeft={isLeft} /> : <MovieLabel />}
      <LinePoint />
      {isLeft ? <MovieLabel isLeft={isLeft} /> : <MovieDetailsBox />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* border: 2px solid green; */
  height: 240px;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px 0px;
  position: relative;
`;

export default RoleDetails;
