import React from "react";
import styled from "styled-components";

interface StyledProps {
	readonly vertical: boolean;
}

function GradientLine({
	width,
	height,
	vertical = false,
}: {
	width: number;
	height: number;
	vertical: boolean;
}) {
	const styles = {
		width: `${width}px`,
		height: `${height}px`,
	};
	return <Line style={styles} vertical={vertical}></Line>;
}

const Line = styled.div<StyledProps>`
	background-image: var(--gradient-vertical);
	background-image: ${(props) =>
		props.vertical ? "var(--gradient-vertical)" : "var(--gradient)"};
`;

export default GradientLine;
