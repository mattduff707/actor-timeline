import styled from 'styled-components';
import Btn from '../Btn';

const SearchForm = () => {
  return (
    <WrapperForm>
      <input />
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
