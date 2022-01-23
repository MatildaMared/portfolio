import React from "react";
import styled from "styled-components";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";

function App() {
	return (
		<Wrapper>
			<NavBar />
			<ContactBanner />
			<Header />
			<About />
			<Footer />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	padding: 0;
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

export default App;
