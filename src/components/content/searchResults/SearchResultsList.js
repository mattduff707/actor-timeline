import styled from 'styled-components';
import SearchResult from './SearchResult';

const SearchResultsList = ({ searchResults, getPerson, setActivePerson }) => {
  return (
    <Wrapper>
      <List>
        {searchResults.map((result, index) => {
          return (
            <SearchResult
              key={index + result.name}
              name={result.name}
              picture={result.profile_path}
              getPerson={getPerson}
              setActivePerson={setActivePerson}
              personId={result.id}
            />
          );
        })}
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
