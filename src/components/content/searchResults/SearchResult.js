import styled from 'styled-components';

const SearchResult = () => {
  return (
    <li>
      <ButtonWrapper>
        <Image />
        <Name>Result</Name>
      </ButtonWrapper>
    </li>
  );
};

const ButtonWrapper = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-bottom: 4px solid ${(props) => props.theme.colors.primaryNeutral};
  display: flex;
  align-items: center;
  padding: 5px 10px;
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.highlightPrimary};
    border-bottom: 4px solid ${(props) => props.theme.colors.highlightSecondary};
    outline: none;
  }
`;
const Image = styled.div`
  height: 100px;
  width: 80px;
  background-color: gray;
`;
const Name = styled.p`
  padding-left: 10px;
  color: ${(props) => props.theme.colors.primaryDark};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 600;
  font-size: 1rem;
  ${ButtonWrapper}:hover &, ${ButtonWrapper}:focus & {
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export default SearchResult;
