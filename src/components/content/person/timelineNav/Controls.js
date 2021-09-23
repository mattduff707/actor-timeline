import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';

const Controls = () => {
  return (
    <Wrapper>
      <Container tabIndex="-1" href="#top">
        <ControlBtn href="#top">Back to top</ControlBtn>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;
const Container = styled.a`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 10px 0px;
  text-decoration: none;
`;

const ControlBtn = styled(Btn)`
  margin: 0px 10px;
`;

export default Controls;
