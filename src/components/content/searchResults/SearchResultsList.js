import styled from 'styled-components';
import SearchResult from './SearchResult';

const SearchResultsList = () => {
  return (
    <Wrapper>
      <List>
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryLight};
  list-style: none;
`;

export default SearchResultsList;
