import styled from 'styled-components';
import Btn from '../Btn';

const SearchForm = () => {
  return (
    <WrapperForm>
      <input />
      <Btn type="submit">Search</Btn>
    </WrapperForm>
  );
};

const WrapperForm = styled.form`
  display: flex;
`;

export default SearchForm;
