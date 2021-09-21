import styled from 'styled-components';

const SearchResult = ({ name, picture, personId, getPerson, setActivePerson }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original`;

  const handleClick = async () => {
    const person = await getPerson(personId);
    setActivePerson(() => person);
  };

  return (
    <li>
      <ButtonWrapper onClick={handleClick}>
        {picture ? <Image src={imageUrl + picture} /> : <NoPicture>No Picture</NoPicture>}
        <Name>{name}</Name>
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
const Image = styled.img`
  height: 100px;
  width: 80px;
  background-color: gray;
`;
const NoPicture = styled.div`
  height: 100px;
  width: 80px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.highlightPrimary};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
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
