import React from "react";
import ContactBanner from "./components/ContactBanner/ContactBanner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<ContactBanner />
			<Header />
			<Footer />
		</>
	);
}

export default App;
