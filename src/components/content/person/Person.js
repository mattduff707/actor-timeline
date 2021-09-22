import React from 'react';
import styled from 'styled-components';
import Details from './details/Details';
import Navbar from './timelineNav/Navbar';
import TimeLine from './timeline/TimeLine';

const Person = ({ activePerson }) => {
  const roles = activePerson.movie_credits.cast.filter((role) => role.release_date); // remove roles that lack a release date
  const getSortedYears = (arr) => {
    const movieYears = arr.map((role) => new Date(role.release_date).getFullYear()); //extract year from date string
    const filteredMovieYears = movieYears.filter((year, index) => movieYears.indexOf(year) === index); //remove repeats
    const sortedMovieYears = filteredMovieYears // remove any NaNs - sort by year ascending
      .filter((year) => !isNaN(year))
      .sort((a, b) => a - b);
    return sortedMovieYears;
  };
  const getSortedRoles = (arr) => {
    // Sort role objects by release date
    const sortedRoles = arr.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
    return sortedRoles;
  };

  const years = getSortedYears(roles);
  const sortedRoles = getSortedRoles(roles);
  return (
    <Wrapper>
      <Details activePerson={activePerson} />
      <Navbar years={years} />
      <TimeLine years={years} sortedRoles={sortedRoles} lineLength={sortedRoles.length - 1 + years.length} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 4px solid red; */
`;

export default Person;
