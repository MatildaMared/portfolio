import React from "react";
import styled from "styled-components";
import { User, Star, MessageCircle } from "react-feather";
import DownloadBtn from "../DownloadBtn/DownloadBtn";

interface Props {
	menuOpen: boolean;
}

function NavBar(props: Props) {
	const { menuOpen } = props;
	return (
		<Wrapper open={menuOpen}>
			<a href="#about">
				<User size={16} />
				Om mig
			</a>
			<a href="#projects">
				<Star size={16} />
				Projekt
			</a>
			<a href="#contact">
				<MessageCircle size={16} />
				Kontakt
			</a>
			<DownloadBtn />
		</Wrapper>
	);
}

interface StyledProps {
	open: boolean;
}

const Wrapper = styled.nav<StyledProps>`
	height: 125px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	transition: transform 0.3s ease-in-out;
	z-index: 15;
	
	@media (max-width: 900px) {
		overflow: hidden;
		transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
		display: flex;
		flex-direction: column;
		justify-content: center;
		background: var(--color-background);
		height: 100vh;
		text-align: left;
		position: absolute;
		top: 0;
		right: 0;
		width: ${({ open }) => (open ? "100%" : "0")};
		height: 100vh;
		z-index: 10;
	}

	a {
		font-size: 0.8rem;
		display: flex;
		align-items: center;
		font-family: var(--font-secondary);
		padding: 2px;
		color: var(--color-gray);
		text-decoration: none;
		transition: color 0.3s linear;

		&:not(:last-child) {
			margin-right: 2rem;
			@media (max-width: 900px) {
				margin-right: 0;
			}
		}

		& svg {
			color: var(--color-purple);
			margin-right: 0.5rem;
		}

		@media (max-width: 900px) {
			font-size: 1.2rem;
			text-align: center;
			margin-bottom: 2rem;
		}

		&:hover {
			color: var(--color-purple);
		}
	}
`;

export default NavBar;
