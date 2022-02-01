import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import BurgerIcon from "./components/BurgerIcon/BurgerIcon";
import Projects from "./components/Projects/Projects";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (menuOpen) {
			const clickListener = (e: MouseEvent) => {
				if (!e.target) return;
				setMenuOpen(false);
			};
			const widthListener = () => {
				if (window.innerWidth > 900) {
					setMenuOpen(false);
				}
			};
			document.addEventListener("click", clickListener);
			window.addEventListener("resize", widthListener);
			return () => {
				document.removeEventListener("click", clickListener);
				window.removeEventListener("resize", widthListener);
			};
		}
	}, [menuOpen]);

	return (
		<Wrapper>
			<NavBar menuOpen={menuOpen} />
			<BurgerIcon menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Content open={menuOpen}>
				<ContactBanner />
				<Header />
				<About />
				<Projects />
				<Footer />
			</Content>
		</Wrapper>
	);
}

interface StyledProps {
	open: boolean;
}

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 8rem;

	@media (max-width: 1200px) {
		padding: 0 8rem;
	}
	@media (max-width: 900px) {
		padding: 0 4rem;
	}
	@media (max-width: 700px) {
		padding: 0 1rem;
	}
`;

const Content = styled.div<StyledProps>`
	display: ${({ open }) => (open ? "none" : "block")};
`;

export default App;
