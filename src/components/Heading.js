import styled from 'styled-components';

const Heading = ({ children, tag, className, label }) => {
  return (
    <StyledHeading aria-label={label} className={className} as={tag}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h2`
  font-weight: normal;
`;

export default Heading;
