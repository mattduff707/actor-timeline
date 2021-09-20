import styled from 'styled-components';
import SearchForm from '../components/header/SearchForm';
import Heading from '../components/Heading';

const Header = () => {
  return (
    <Wrapper>
      <Title tag="h1">Actor Timeline</Title>
      <SearchForm />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled(Heading)`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.highlightPrimary};
  padding-bottom: 10px;
`;

export default Header;
