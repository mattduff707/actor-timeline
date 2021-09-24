import styled from 'styled-components';
import SearchResult from './SearchResult';
import Heading from '../../Heading';

const SearchResultsList = ({ searchResults, getPerson, setActivePerson }) => {
  if (searchResults.length === 0) {
    return <PlaceHolder>No Results...</PlaceHolder>;
  }
  return (
    <Wrapper>
      <ResultsHeading tag="h2">Search Results:</ResultsHeading>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
`;
const ResultsHeading = styled(Heading)`
  padding: 10px 0px;
  color: ${(props) => props.theme.colors.primaryDark};
  font-size: 1.4rem;
`;
const PlaceHolder = styled(Heading)`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.primaryDark};
  width: 100%;
  text-align: center;
  padding-top: 10px;
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
