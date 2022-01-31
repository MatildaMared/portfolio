import React from "react";
import styled from "styled-components";

function DownloadBtn() {
	return (
		<Wrapper href="/CV-Matilda-Mared.pdf" download>
			<Text>Ladda ner CV</Text>
		</Wrapper>
	);
}

const Wrapper = styled.a`
	height: fit-content;
	background-color: var(--color-purple);
	background-image: var(--gradient);
	background-size: 100%;
	background-position: center;
	padding: 2px;
	border-radius: 0.5rem;
	transition: all 0.3s;

	&:hover {
		span {
			background-color: #252525e4;
			color: #cecece;
		}
	}
`;

const Text = styled.span`
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: var(--color-background);
	transition: all 0.3s;
`;

export default DownloadBtn;
