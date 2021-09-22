import React from 'react';
import styled from 'styled-components';

const MoviePoster = ({ src, alt, isPoster }) => {
  return isPoster ? <Image src={src} alt={`movie poster for ${alt}`} /> : <NoImage>No Picture</NoImage>;
};

const Image = styled.img`
  height: 156px;
  width: 108px;
`;
const NoImage = styled.p`
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.highlightPrimary};
  height: 156px;
  width: 108px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default MoviePoster;
