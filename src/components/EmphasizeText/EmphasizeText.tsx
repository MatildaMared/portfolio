import React from "react";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
};

function EmphasizeText(props: Props) {
	return <Text>{props.children}</Text>;
}

const Text = styled.em`
	font-family: var(--font-secondary);
	color: var(--color-purple);
	font-style: normal;
	background-color: rgba(255, 255, 255, 0.1);
	padding: 1px 2px;
	white-space: nowrap;
`;

export default EmphasizeText;
