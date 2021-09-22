import styled from 'styled-components';
import Heading from '../../../Heading';
const MovieLabel = ({ isLeft, isOpen, role }) => {
  return (
    <Wrapper isOpen={isOpen} isLeft={isLeft}>
      <MovieTitle isOpen={isOpen} as="h3">
        {role.title}
      </MovieTitle>
      <MovieYear isOpen={isOpen} as="h4">
        {role.release_date}
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
  color: ${(props) => props.theme.colors.highlightPrimary};
  display: ${(props) => (props.isOpen ? 'none' : 'visible')};
`;
const MovieYear = styled(Heading)`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primaryDark};
  display: ${(props) => (props.isOpen ? 'none' : 'visible')};
`;

export default MovieLabel;
