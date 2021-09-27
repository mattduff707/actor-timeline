import styled from 'styled-components';

const Line = ({ length }) => {
  return <TimeLine length={length} />;
};

const TimeLine = styled.div`
  width: 6px;
  height: ${(props) => `${props.length * props.theme.roleHeight}px`};
  background-color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
`;

export default Line;
