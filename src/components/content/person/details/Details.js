import React from 'react';
import styled from 'styled-components';
import DetailsImage from './DetailsImage';
import DetailsText from './DetailsText';

const Details = ({ activePerson, sortedRoles }) => {
  const { name, profile_path, imdb_id, birthday, place_of_birth, deathday } = activePerson;
  const averageRating =
    sortedRoles.length > 0
      ? sortedRoles.map((credit) => credit.vote_average).reduce((acc, currentVal) => acc + currentVal) /
        sortedRoles.length
      : 0;
  return (
    <Wrapper>
      <DetailsImage picture={profile_path} />
      <DetailsText
        name={name}
        imdb={imdb_id}
        birthday={birthday}
        deathday={deathday}
        placeOfBirth={place_of_birth}
        movieCredits={sortedRoles}
        averageRating={averageRating}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryLight};
  padding: 20px 0px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default Details;
