import React from 'react';
import styled from 'styled-components';
import Heading from '../../../Heading';

const MovieDetailsBox = ({ isLeft }) => {
  return (
    <Wrapper isLeft={isLeft}>
      {!isLeft && <Connector />}
      <DetailsBox>
        {!isLeft && <Image />}
        <Container isLeft={isLeft}>
          <MovieTitle>Dr Strangelove: How I learned to love the bomb or whatever</MovieTitle>
          <Detail>
            <Highlight>Release:</Highlight> 10/24/1987
          </Detail>
          <Detail>
            <Highlight>Character:</Highlight> Johnny FleckStein
          </Detail>
          <Detail>
            <Highlight>Rating:</Highlight> 7.2
          </Detail>
        </Container>
        {isLeft && <Image />}
      </DetailsBox>
      {isLeft && <Connector />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: ${(props) => (props.isLeft ? 'flex-end' : 'flex-start')};
  align-items: center;
`;
const Connector = styled.div`
  height: 6px;
  width: 60px;
  background-color: ${(props) => props.theme.colors.primaryDark};
`;
const DetailsBox = styled.div`
  height: 100%;
  border: 6px solid ${(props) => props.theme.colors.primaryDark};
  background-color: ${(props) => props.theme.colors.primaryLight};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  max-width: 500px;
  overflow-y: auto;
  /* max-width: 400px; */
`;
const Image = styled.div`
  width: 120px;
  height: 160px;

  background-color: gray;
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
