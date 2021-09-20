import styled from 'styled-components';

const Btn = ({ handleClick, type, children, className }) => {
  return (
    <StyledBtn onClick={handleClick} type={type} className={className}>
      {children}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primaryDark};
  border: 4px solid ${(props) => props.theme.colors.primaryNeutral};
  padding: 5px 10px;
  font-family: inherit;
  font-size: 1rem;
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.highlightSecondary};
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.highlightPrimary};
    color: ${(props) => props.theme.colors.primaryLight};
    border: 4px solid ${(props) => props.theme.colors.highlightSecondary};
  }
`;

export default Btn;
