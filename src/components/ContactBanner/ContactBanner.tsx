import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import GradientLine from "../GradientLine/GradientLine";

function ContactBanner() {
	const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);
	});

	if (windowWidth > 1200) {
		return (
			<Wrapper>
				<Container>
					<GradientLine width={2} height={266} />
					<p>Matilda Mared</p>
				</Container>
				<Container>
					<GradientLine width={2} height={200} />{" "}
					<a href="mailto:matildamared@live.se">matildamared@live.se</a>
				</Container>
			</Wrapper>
		);
	} else {
		return null;
	}
}

const Wrapper = styled.aside`
	position: fixed;
	top: 0px;
	left: 40px;
	height: fit-content;
	transform: rotate(180deg);
	text-orientation: mixed;
	writing-mode: vertical-rl;
`;

const bounceAnimation = keyframes`
  0%, 20%, 40%, 60%, 80%, 100% {transform: translateY(0);}
  50% {transform: translateY(-5px);}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	flex-direction: row-reverse;
	font-family: var(--font-secondary);

	p {
		margin-bottom: 0.5rem;
		font-weight: 600;
	}

	a {
		font: inherit;
		margin-bottom: 0.5rem;
		text-decoration: none;
		transition: color 0.3s;
		color: var(--color-gray);

		&:hover {
			color: var(--color-purple);
			animation: 2s ease-out 0s infinite ${bounceAnimation};
		}
	}
`;

export default ContactBanner;
