import React from "react";
import styled from "styled-components";

interface Props {
	menuOpen: boolean;
	setMenuOpen: (menuOpen: boolean) => void;
}

function BurgerIcon(props: Props) {
	const { menuOpen, setMenuOpen } = props;
	return (
		<Button open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
			<div />
			<div />
			<div />
		</Button>
	);
}

interface StyledProps {
	open: boolean;
}

const Button = styled.button<StyledProps>`
	@media screen and (min-width: 900px) {
		display: none;
	}

	position: fixed;
	top: 2rem;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 25;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ open }) =>
			open ? "var(--color-purple)" : "rgba(255, 255, 255, .8)"};
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;

		:first-child {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}

		:nth-child(2) {
			opacity: ${({ open }) => (open ? "0" : "1")};
			transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
		}

		:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export default BurgerIcon;
