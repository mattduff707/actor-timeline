import { useState } from 'react';
import styled from 'styled-components';
import LinePoint from './LinePoint';
import MovieLabel from './MovieLabel';
import MovieDetailsBox from './MovieDetailsBox';

const RoleDetails = ({ isLeft, role, age }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <Wrapper>
      {isLeft ? (
        <MovieDetailsBox handleClick={handleClick} age={age} isOpen={isOpen} isLeft={isLeft} role={role} />
      ) : (
        <MovieLabel age={age} role={role} isOpen={isOpen} />
      )}

      <LinePoint role={role} isOpen={isOpen} handleClick={handleClick} />

      {isLeft ? (
        <MovieLabel age={age} role={role} isOpen={isOpen} isLeft={isLeft} />
      ) : (
        <MovieDetailsBox handleClick={handleClick} age={age} role={role} isOpen={isOpen} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  /* border: 2px solid green; */
  height: ${(props) => `${props.theme.roleHeight}px`};
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 10px 0px;
  position: relative;
`;

export default RoleDetails;
