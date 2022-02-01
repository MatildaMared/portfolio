import React from 'react';
import styled from 'styled-components';
import SectionHeading from '../SectionHeading/SectionHeading';

function Projects() {
  return <Wrapper>
    <SectionHeading title="Projekt" />
  </Wrapper>;
}

const Wrapper = styled.section`
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 14rem 0 0 0;
`;

export default Projects;
