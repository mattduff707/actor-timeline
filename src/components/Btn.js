import styled from 'styled-components';

const Btn = ({ handleClick, type, children, className, tabIndex, label }) => {
  return (
    <StyledBtn aria-label={label} onClick={handleClick} type={type} className={className} tabIndex={tabIndex}>
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
  font-weight: bold;
  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.highlightSecondary};
  }
  &:hover,
  &:focus {
    background-color: ${(props) => props.theme.colors.highlightPrimary};
    color: white;
    border: 4px solid ${(props) => props.theme.colors.highlightPrimary};
  }
`;

export default Btn;
