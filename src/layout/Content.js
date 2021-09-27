import { useState } from 'react';
import styled from 'styled-components';
// import SearchResultsList from '../components/content/searchResults/SearchResultsList';
import Person from '../components/content/person/Person';
import SearchResultsList from '../components/content/searchResults/SearchResultsList';
import Heading from '../components/Heading';

const Content = ({ isSearched, isLoading, error, searchResults, getPerson }) => {
  const [activePerson, setActivePerson] = useState(false);

  if (isLoading) {
    return <PlaceHolder>Loading...</PlaceHolder>;
  }
  if (error) {
    return <PlaceHolder>Error!</PlaceHolder>;
  }
  if (isSearched) {
    return <SearchResultsList searchResults={searchResults} setActivePerson={setActivePerson} getPerson={getPerson} />;
  }
  if (activePerson) {
    return <Person activePerson={activePerson} />;
  }

  return <PlaceHolder tag="h2">Search for any actor to see the timeline of their movie career!</PlaceHolder>;
};

const PlaceHolder = styled(Heading)`
  width: 100%;
  padding-top: 10px;
  color: ${(props) => props.theme.colors.primaryDark};
  text-align: center;
`;

export default Content;
