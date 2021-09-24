import styled from 'styled-components';

const LinePoint = ({ handleClick, isOpen, role }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Point aria-label={`Toggle details about movie ${role.title}`} isOpen={isOpen} onClick={handleClick} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? 'none' : 'flex')};
  }
`;
const Point = styled.button`
  width: 30px;
  height: 30px;
  border: 6px solid ${(props) => props.theme.colors.primaryDark};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isOpen ? props.theme.colors.highlightPrimary : props.theme.colors.primaryNeutral};
  z-index: 1;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlightSecondary};
  }
`;

export default LinePoint;
