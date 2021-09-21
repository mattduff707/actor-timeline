import { useState } from 'react';
import styled from 'styled-components';
import LinePoint from './LinePoint';
import MovieLabel from './MovieLabel';
import MovieDetailsBox from './MovieDetailsBox';

const RoleDetails = ({ isLeft }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <Wrapper>
      {isLeft ? <MovieDetailsBox isOpen={isOpen} isLeft={isLeft} /> : <MovieLabel isOpen={isOpen} />}
      <LinePoint isOpen={isOpen} handleClick={handleClick} />
      {isLeft ? <MovieLabel isOpen={isOpen} isLeft={isLeft} /> : <MovieDetailsBox isOpen={isOpen} />}
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
