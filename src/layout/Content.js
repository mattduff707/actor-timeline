import { useState } from 'react';
import styled from 'styled-components';
// import SearchResultsList from '../components/content/searchResults/SearchResultsList';
import Person from '../components/content/person/Person';
import SearchResultsList from '../components/content/searchResults/SearchResultsList';

const Content = ({ isSearched, isLoading, error, searchResults, getPerson }) => {
  const [activePerson, setActivePerson] = useState(false);

  if (isLoading) {
    return <Loading>Loading...</Loading>;
  }
  if (error) {
    return <p>Error</p>;
  }
  if (isSearched) {
    return <SearchResultsList searchResults={searchResults} setActivePerson={setActivePerson} getPerson={getPerson} />;
  }
  if (activePerson) {
    return <Person activePerson={activePerson} />;
  }

  return <p>Search for someone!</p>;
};

const Loading = styled.p``;

export default Content;
