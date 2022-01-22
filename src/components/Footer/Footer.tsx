import React from "react";
import { Heart } from "react-feather";
import styled, { keyframes } from "styled-components";

function Footer() {
	return (
		<footer>
			<CopyrightText>
				Made with <Heart size={14} /> by Matilda Mared
			</CopyrightText>
		</footer>
	);
}

const beatAnimation = keyframes`
  0%, 50%, 100% { transform: scale(1, 1) translateY(3px); }
  30%, 80% { transform: scale(1.3, 1.3) translateY(3px); }
`;

const CopyrightText = styled.p`
	font-family: var(--font-secondary);
	display: flex;
	font-size: 0.8rem;

	&:hover {
		& svg {
			animation: 1.8s ease 0s infinite ${beatAnimation};
		}
	}

	& svg {
		margin: 0 10px;
		transform: translateY(3px);
		color: var(--color-pink);
		transition: all 0.2s ease-in-out;
	}
`;

export default Footer;
