import React from "react";
import styled from "styled-components";

function GradientLine({ width, height }: { width: number; height: number }) {
	const styles = {
		width: `${width}px`,
		height: `${height}px`,
	};
	return <Line style={styles}></Line>;
}

const Line = styled.div`
	background-image: var(--gradient-vertical);
`;

export default GradientLine;
