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
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />
        <Header />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default App;
