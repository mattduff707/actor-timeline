import styled from 'styled-components';
import NavList from './NavList';

const Navbar = () => {
  return (
    <Nav>
      <NavList />
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
