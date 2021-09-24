import React from 'react';
import styled from 'styled-components';

const MoviePoster = ({ src, alt, isPoster, isLeft }) => {
  return isPoster ? (
    <Image isLeft={isLeft} src={src} alt={`movie poster for ${alt}`} />
  ) : (
    <NoImage isLeft={isLeft}>No Picture</NoImage>
  );
};

const Image = styled.img`
  height: 156px;
  width: 108px;
  @media (min-width: 1024px) {
    order: ${(props) => (props.isLeft ? '3' : '1')};
  }
`;
const NoImage = styled.p`
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.highlightPrimary};
  height: 156px;
  width: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 1024px) {
    order: ${(props) => (props.isLeft ? '3' : '1')};
  }
`;

export default MoviePoster;
