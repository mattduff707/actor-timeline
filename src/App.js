import { useState } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from './constants';

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

  const fetchData = async (url) => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch(url);
      if (response.ok) {
        const json = await response.json();
        return json;
      } else {
        throw response;
      }
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };
  const handleSearch = async (e) => {
    e.preventDefault();
    const newSearchVal = e.target.search.value.replace(' ', '%20');
    const url = `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${newSearchVal}&page=1&include_adult=false`;
    const { results } = await fetchData(url);
    setSearchResults(() => results);
    setIsSearched(true);
  };

  const getPerson = async (id) => {
    const url = `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=movie_credits`;
    const data = await fetchData(url);
    setIsSearched(false);
    return data;
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header handleSearch={handleSearch} />
        <main>
          <Content
            error={error}
            isLoading={isLoading}
            searchResults={searchResults}
            isSearched={isSearched}
            getPerson={getPerson}
          />
        </main>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
