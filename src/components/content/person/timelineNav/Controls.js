import React from 'react';
import styled from 'styled-components';
import Btn from '../../../Btn';

const Controls = () => {
  return (
    <Wrapper>
      <Container>
        <ControlBtn>Back to top</ControlBtn>
        <ControlBtn>Show All</ControlBtn>
        <ControlBtn>Close All</ControlBtn>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 10px 0px;
`;

const ControlBtn = styled(Btn)`
  margin: 0px 10px;
`;

export default Controls;
