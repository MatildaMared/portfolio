import React from "react";
import styled from "styled-components";
import GradientLine from "../GradientLine/GradientLine";

function SectionHeading({ title }: { title: string }) {
	return (
		<Wrapper>
			<GradientLine width={130} height={2} vertical={false} />
			<Heading>{title}</Heading>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	display: flex;
	align-items: center;
  margin-bottom: 3rem;
`;

const Heading = styled.h2`
	font-size: 2.2rem;
  margin-left: 1rem;
`;

export default SectionHeading;
