import styled from 'styled-components';

const searchInput = ({ className }) => {
  return <SearchBar autoComplete="off" name="search" className={className} type="text"></SearchBar>;
};

const SearchBar = styled.input`
  background-color: ${(props) => props.theme.colors.background};
  border: 4px solid ${(props) => props.theme.colors.primaryNeutral};
  margin-right: 10px;
  font-size: 1rem;
  padding: 0px 5px;
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.highlightSecondary};
  }
`;

export default searchInput;
