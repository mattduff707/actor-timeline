import React from 'react';
import styled from 'styled-components';
import Line from './Line';
import RoleDetails from './RoleDetails';
import MovieYear from './MovieYear';

const TimeLine = ({ sortedRoles, lineLength }) => {
  return (
    <Wrapper>
      <Line length={lineLength} />
      {sortedRoles.map((role, index, arr) => {
        const roleYear = new Date(role.release_date).getFullYear();
        const previousRoleYear = index > 0 && new Date(arr[index - 1].release_date).getFullYear();

        if (roleYear > previousRoleYear) {
          return (
            <>
              <MovieYear year={roleYear} />
              <RoleDetails key={index} role={role} isLeft={index % 2 === 0} />
            </>
          );
        } else {
          return <RoleDetails key={index} role={role} isLeft={index % 2 === 0} />;
        }
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 200px;
`;

export default TimeLine;
