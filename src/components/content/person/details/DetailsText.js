import React from 'react';
import styled from 'styled-components';
import Heading from '../../../Heading';
import Btn from '../../../Btn';
import { calculateAge } from '../../../../constants';

const DetailsText = ({ name, placeOfBirth, birthday, imdb, movieCredits, averageRating, deathday }) => {
  const age = calculateAge(birthday, new Date());
  return (
    <Wrapper>
      <Name tag="h2">{name}</Name>
      <Detail>
        <Label>Born:</Label> {birthday} {!deathday && `(Age: ${age})`}
        <br /> {placeOfBirth}
      </Detail>
      {deathday && (
        <Detail>
          <Label>Died:</Label> {deathday} (Age: {calculateAge(birthday, deathday)})
        </Detail>
      )}
      <Detail>
        <Label>Roles:</Label> {movieCredits.length}
      </Detail>
      <Detail>
        <Label>Average Rating:</Label> {averageRating.toFixed(2)}
      </Detail>
      <ImdbLink tabIndex="-1" href={`https://www.imdb.com/name/${imdb}`} target="_blank">
        <Btn role="link">IMDb</Btn>
      </ImdbLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  /* border: 2px solid red; */
  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;
const Name = styled(Heading)`
  color: ${(props) => props.theme.colors.highlightPrimary};
  font-weight: 600;
  align-self: center;
  font-size: 2rem;
`;
const Detail = styled.p`
  display: flex;
  color: ${(props) => props.theme.colors.primaryDark};
  font-weight: 500;
  padding: 5px 0px;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Label = styled.span`
  font-weight: 600;
  padding-right: 5px;
`;
const ImdbLink = styled.a`
  align-self: center;
  padding-top: 10px;
`;

export default DetailsText;
