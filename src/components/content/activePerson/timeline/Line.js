import styled from 'styled-components';

const Line = () => {
  return <TimeLine />;
};

const TimeLine = styled.div`
  width: 6px;
  height: 2000px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  position: absolute;
  top: 120px;
  left: 50%;
  transform: translateX(-50%);
`;

export default Line;
