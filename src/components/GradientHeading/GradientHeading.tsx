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
	} else if (props.type === "h4") {
		return <H4>{props.text}</H4>;
	} else if (props.type === "h5") {
		return <H5>{props.text}</H5>;
	} else if (props.type === "h6") {
		return <H6>{props.text}</H6>;
	} else {
		return null;
	}
}

const baseStyles = css`
	font-size: 3rem;
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
	font-size: 3rem;
	${baseStyles}
`;

const H2 = styled.h2`
	font-size: 2.5rem;
	${baseStyles}
`;

const H3 = styled.h3`
	font-size: 2rem;
	${baseStyles}
`;

const H4 = styled.h4`
	font-size: 1.5rem;
	${baseStyles}
`;

const H5 = styled.h5`
	font-size: 1rem;
	${baseStyles}
`;

const H6 = styled.h6`
	font-size: 0.5rem;
	${baseStyles}
`;

export default GradientHeading;
