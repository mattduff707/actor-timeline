import styled from 'styled-components';

const LinePoint = () => {
  return (
    <Wrapper>
      <Point />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
`;
const Point = styled.button`
  width: 30px;
  height: 30px;
  border: 6px solid hsl(210, 18%, 31%);
  border-radius: 50%;
  background-color: hsl(215, 28%, 47%);
  z-index: 1;
`;

export default LinePoint;
