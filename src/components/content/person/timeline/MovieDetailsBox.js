import React from 'react';
import styled from 'styled-components';
import Heading from '../../../Heading';
import MoviePoster from './MoviePoster';
import { imageUrl } from '../../../../constants';

const MovieDetailsBox = ({ isLeft, isOpen, role, age }) => {
  return (
    <Wrapper isOpen={isOpen} isLeft={isLeft}>
      {!isLeft && <Connector isOpen={isOpen} />}
      <DetailsBox isOpen={isOpen}>
        {!isLeft && <MoviePoster src={imageUrl + role.poster_path} alt={role.title} isPoster={role.poster_path} />}
        <Container isLeft={isLeft}>
          <MovieTitle>{role.title}</MovieTitle>
          <Detail>
            <Highlight>Release:</Highlight> {role.release_date}
          </Detail>
          <Detail>
            <Highlight>Age:</Highlight> {age}
          </Detail>
          <Detail>
            <Highlight>Character:</Highlight> {role.character}
          </Detail>
          <Detail>
            <Highlight>Rating:</Highlight> {role.vote_average}
          </Detail>
        </Container>
        {isLeft && <MoviePoster src={imageUrl + role.poster_path} alt={role.title} isPoster={role.poster_path} />}
      </DetailsBox>
      {isLeft && <Connector isOpen={isOpen} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
  align-items: center;
  @media (max-width: 1024px) {
    width: ${(props) => (props.isOpen ? 'auto' : '50%')};
  }
`;
const Connector = styled.div`
  height: 6px;
  width: 60px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  display: ${(props) => (props.isOpen ? 'visible' : 'none')};
  @media (max-width: 1024px) {
    display: none;
  }
`;
const DetailsBox = styled.div`
  height: 100%;
  border: 6px solid ${(props) => props.theme.colors.primaryDark};
  background-color: ${(props) => props.theme.colors.primaryLight};
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  padding: 0px 10px;
  max-width: 500px;
  overflow-y: auto;
  /* max-width: 400px; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  /* border: 2px solid blue; */
  margin: ${(props) => (props.isLeft ? '0px 10px 0px 0px' : '0px 0px 0px 10px')};
`;
const MovieTitle = styled(Heading)`
  align-self: center;
  max-width: 200px;
  font-size: 1.2rem;
  white-space: normal;
  color: ${(props) => props.theme.colors.highlightPrimary};
  font-weight: 600;
  /* border: 2px solid red; */
`;
const Detail = styled.p`
  max-width: 200px;
  padding: 2px 0px;
  color: ${(props) => props.theme.colors.primaryDark};
  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }
`;
const Highlight = styled.span`
  font-weight: 600;
`;

export default MovieDetailsBox;
