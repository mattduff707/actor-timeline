import styled from 'styled-components';
import Heading from '../../../Heading';
const MovieLabel = ({ isLeft }) => {
  return (
    <Wrapper isLeft={isLeft}>
      <MovieTitle as="h3">Movie</MovieTitle>
      <MovieYear as="h4">Year</MovieYear>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isLeft ? 'flex-start' : 'flex-end')};
  justify-content: center;
  padding: ${(props) => (props.isLeft ? '0px 0px 0px 10px' : '0px 10px 0px 0px')};
`;

const MovieTitle = styled(Heading)`
  font-size: 1rem;
`;
const MovieYear = styled(Heading)`
  font-size: 0.9rem;
`;

export default MovieLabel;
