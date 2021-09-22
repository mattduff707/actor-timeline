import styled from 'styled-components';
import NavList from './NavList';

const Navbar = ({ roles }) => {
  const movieYears = roles.map((role) => role.release_date.slice(0, 4));
  const filteredMovieYears = movieYears.filter((year, index) => movieYears.indexOf(year) === index);
  const sortedMovieYears = filteredMovieYears
    .map((year) => parseInt(year))
    .filter((year) => !isNaN(year))
    .sort((a, b) => a - b);
  console.log(sortedMovieYears);

  return (
    <Nav>
      <NavList sortedMovieYears={sortedMovieYears} />
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
