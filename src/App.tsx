import React from "react";
import styled from "styled-components";

function App() {
	return (
		<div className="App">
			<Heading>Portfolio</Heading>
		</div>
	);
}

const Heading = styled.h1`
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

export default App;
