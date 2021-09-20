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
  font-weight: bold;
`;

export default Btn;
