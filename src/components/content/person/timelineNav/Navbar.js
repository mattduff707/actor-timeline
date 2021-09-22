import styled from 'styled-components';
import NavList from './NavList';

const Navbar = ({ years }) => {
  return (
    <Nav>
      <NavList years={years} />
    </Nav>
  );
};

const Nav = styled.nav`
  min-width: 100%;
  position: sticky;
  top: 0px;
  z-index: 20;
`;

export default Navbar;
