import { useState } from 'react';
import styled from 'styled-components';
// import SearchResultsList from '../components/content/searchResults/SearchResultsList';
import ActivePerson from '../components/content/activePerson/ActivePerson';
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
    return <ActivePerson activePerson={activePerson} />;
  }

  return <p>Search for someone!</p>;
};

const Loading = styled.p``;

export default Content;
