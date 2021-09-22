import React from 'react';
import styled from 'styled-components';
import Line from './Line';
import RoleDetails from './RoleDetails';
import MovieYear from './MovieYear';
import { calculateAge } from '../../../../constants';

const TimeLine = ({ sortedRoles, lineLength, birthday }) => {
  return (
    <Wrapper>
      <Line length={lineLength} key={lineLength} />
      {sortedRoles.map((role, index, arr) => {
        const roleYear = new Date(role.release_date).getFullYear();
        const previousRoleYear = index > 0 && new Date(arr[index - 1].release_date).getFullYear();
        const age = calculateAge(birthday, role.release_date);

        if (roleYear > previousRoleYear) {
          return (
            <div key={index}>
              <MovieYear year={roleYear} />
              <RoleDetails age={age} role={role} isLeft={index % 2 === 0} />
            </div>
          );
        } else {
          return <RoleDetails age={age} key={index} role={role} isLeft={index % 2 === 0} />;
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
