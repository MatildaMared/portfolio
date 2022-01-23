import React from "react";
import styled, { css } from "styled-components";

interface Props {
	type: string;
	text: string;
}

function GradientHeading(props: Props) {
	if (props.type === "h1") {
		return <H1>{props.text}</H1>;
	} else if (props.type === "h2") {
		return <H2>{props.text}</H2>;
	} else if (props.type === "h3") {
		return <H3>{props.text}</H3>;
	} else {
		return null;
	}
}

const baseStyles = css`
	font-weight: 800;
	width: fit-content;
	background-color: var(--color-purple);
	background-image: var(--gradient);
	background-size: 100%;
	background-position: center;
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const H1 = styled.h1`
	${baseStyles}
`;

const H2 = styled.h2`
	${baseStyles}
`;

const H3 = styled.h3`
	${baseStyles}
`;

export default GradientHeading;
