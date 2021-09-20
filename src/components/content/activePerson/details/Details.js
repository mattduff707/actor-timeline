import React from 'react';
import styled from 'styled-components';
import DetailsImage from './DetailsImage';
import DetailsText from './DetailsText';

const Details = () => {
  return (
    <Wrapper>
      <DetailsImage />
      <DetailsText />
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
