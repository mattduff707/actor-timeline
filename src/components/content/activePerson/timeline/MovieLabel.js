import styled from 'styled-components';
import Heading from '../../../Heading';
const MovieLabel = ({ isLeft, isOpen }) => {
  return (
    <Wrapper isOpen={isOpen} isLeft={isLeft}>
      <MovieTitle isOpen={isOpen} as="h3">
        Movie
      </MovieTitle>
      <MovieYear isOpen={isOpen} as="h4">
        Year
      </MovieYear>
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
  @media (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? 'none' : 'flex')};
  }
`;

const MovieTitle = styled(Heading)`
  font-size: 1rem;

  display: ${(props) => (props.isOpen ? 'none' : 'visible')};
`;
const MovieYear = styled(Heading)`
  font-size: 0.9rem;
  display: ${(props) => (props.isOpen ? 'none' : 'visible')};
`;

export default MovieLabel;
