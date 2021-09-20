import styled from 'styled-components';
import Btn from '../Btn';
import SearchInput from './SearchInput';

const SearchForm = () => {
  return (
    <WrapperForm>
      <SearchInput />
      <Btn type="submit">Search</Btn>
    </WrapperForm>
  );
};

const WrapperForm = styled.form`
  display: flex;
`;

export default SearchForm;
