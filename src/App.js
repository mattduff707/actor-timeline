import { useState } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './constants';
// import useFetch from './hooks/useFetch';

const GlobalStyle = createGlobalStyle`
body {
  height: 100px;
  background-color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.primary};
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
function App() {
  const [isSearched, setIsSearched] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const searchFetch = async (searchVal) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchVal}&page=1&include_adult=false`
      );
      if (response.ok) {
        const json = await response.json();
        const { results } = json;
        setSearchResults(() => results);
        console.log(searchResults);
      } else {
        throw response;
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchFetch(e.target.search.value);
    setIsSearched(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header handleSearch={handleSearch} />
        <Content error={error} isLoading={isLoading} searchResults={searchResults} isSearched={isSearched} />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
