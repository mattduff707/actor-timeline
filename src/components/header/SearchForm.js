import styled from 'styled-components';
import Btn from '../Btn';
import SearchInput from './SearchInput';

const SearchForm = ({ handleSearch }) => {
  return (
    <WrapperForm aria-label="Search for Actors" onSubmit={handleSearch}>
      <SearchInput />
      <SearchBtn type="submit">Search</SearchBtn>
    </WrapperForm>
  );
};

const WrapperForm = styled.form`
  display: flex;
`;
const SearchBtn = styled(Btn)`
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

export default SearchForm;
