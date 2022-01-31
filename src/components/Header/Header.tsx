import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GradientHeading from "../GradientHeading/GradientHeading";
import EmphasizeText from "./../EmphasizeText/EmphasizeText";
import signature from "../../images/signature.png";

let activePhraseIndex = 0;
const phrases = [
	"Jag älskar att skriva kod.",
	"Jag är en utvecklare.",
	"Jag är grym på att skriva kod.",
	"Jag älskar JavaScript.",
	"Jag är en CSS wizard.",
	"Jag är lite av en nörd.",
	"Jag gillar kod.",
];

function Header() {
	const [activePhrase, setActivePhrase] = useState(phrases[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			if (activePhraseIndex === phrases.length - 1) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				activePhraseIndex = 0;
			} else {
				activePhraseIndex++;
			}
			setActivePhrase(phrases[activePhraseIndex]);
		}, 4000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Wrapper>
			<Text>Hej, jag heter</Text>
			<GradientHeading type="h1" text="Matilda Mared" />
			<h2>{activePhrase}</h2>
			<IntroductionText>
				Så roligt att du har hittat hit! 👋🏻 Jag är en{" "}
				<EmphasizeText>JavaScriptutvecklare</EmphasizeText> som strävar efter
				att skapa lösningar som inte bara ser bra ut – de ska dessutom vara
				funktionella och tillgängliga. Att skriva kod är bland det roligaste jag
				vet och på denna sida visar jag upp ett urval av mina projekt.
			</IntroductionText>
			<Signature src={signature} alt="Matilda Mared" />
		</Wrapper>
	);
}

const Wrapper = styled.header`
	max-width: var(--max-width);
	margin: 0 auto;
	margin-top: 2rem;
	margin-bottom: 2rem;
	padding-top: 8rem;

	@media(max-width: 900px) {
		padding-top: 12rem;
	}
`;

const Text = styled.span`
	font-size: 1rem;
	font-family: var(--font-secondary);
	color: var(--color-gray);
`;

const IntroductionText = styled.p`
	margin-top: 1.5rem;
	max-width: 520px;

	@media (max-width: 700px) {
		margin-top: 0.5rem;
	}
`;

const Signature = styled.img`
	width: 120px;
	height: auto;
	padding: 1rem 0;
`;

export default Header;
