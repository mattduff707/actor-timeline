import React from 'react';
import styled from 'styled-components';
import Heading from '../../../Heading';
import Btn from '../../../Btn';

const DetailsText = () => {
  return (
    <Wrapper>
      <Name tag="h2">Brad Pitt</Name>
      <Detail>
        <Label>Born:</Label> December 18, 1963 (age 57)
        <br /> Shawnee, Oklahoma, U.S.
      </Detail>
      <Detail>
        <Label>Roles:</Label> 200
      </Detail>
      <Detail>
        <Label>Average Rating:</Label> 7.0
      </Detail>
      <ImdbLink tabIndex="-1" href="imdb.com" target="_blank">
        <Btn role="link">IMDB</Btn>
      </ImdbLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  /* border: 2px solid red; */
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
