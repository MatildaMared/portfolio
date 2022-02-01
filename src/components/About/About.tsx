import React from "react";
import styled from "styled-components";
import EmphasizeText from "../EmphasizeText/EmphasizeText";
import SectionHeading from "../SectionHeading/SectionHeading";
import GradientLine from "../GradientLine/GradientLine";
import MatildaImage from "../../images/Matilda.jpg";

function About() {
	return (
		<Wrapper id="about">
			<SectionHeading title={"Om mig"} />
			<InformationWrapper>
				<article>
					<Text>
						Jag heter Matilda och jag älskar att skapa fina saker på nätet. När
						det kommer till JavaScript är jag bekväm med att arbeta med både{" "}
						<EmphasizeText>frontend</EmphasizeText> och{" "}
						<EmphasizeText>backend</EmphasizeText>. Jag har dessutom arbetat
						mycket med <EmphasizeText>MongoDB</EmphasizeText>. Gällande ramverk
						är jag mest bekväm med <EmphasizeText>React</EmphasizeText> men jag
						ser verkligen fram emot att grotta ner mig i{" "}
						<EmphasizeText>Svelte</EmphasizeText> när jag får lite tid över –
						det ser fantastiskt ut!
					</Text>
					<Text>
						Jag tycker väldigt mycket om att skapa saker som ser snygga ut och
						när det kommer till styling använder jag mig gärna av{" "}
						<EmphasizeText>styled-components</EmphasizeText> eller{" "}
						<EmphasizeText>sass</EmphasizeText>. På senare tid har jag också
						börjat uppskatta testning och lägger gärna lite extra tid på att
						testa de projekt jag skapar, exempelvis med hjälp av
						<EmphasizeText>Jest</EmphasizeText> och{" "}
						<EmphasizeText>react-testing-library</EmphasizeText>.
					</Text>
					<Text>
						I grupp jobbar jag gärna <EmphasizeText>agilt</EmphasizeText> och
						hoppas att jag ska få möjlighet att certifiera mig som Scrum Master
						så småningom.
					</Text>
					<Text>
						P.S. Med en kandidatexamen inom kommunikation i bagaget kan jag
						dessutom garantera snygga variabelnamn!
					</Text>
				</article>
				<ImageWrapper>
					<img src={MatildaImage} alt="Matilda" />
				</ImageWrapper>
			</InformationWrapper>
			<HeadingWrapper>
				<GradientLine width={50} height={2} vertical={false} />
				<SmallHeading>Språk och teknologier jag gärna använder</SmallHeading>
			</HeadingWrapper>
			<Grid>
				<Item>HTML</Item>
				<Item>CSS</Item>
				<Item>JavaScript</Item>
				<Item>React</Item>
				<Item>Node.js</Item>
				<Item>TypeScript</Item>
				<Item>MongoDB</Item>
				<Item>Sass</Item>
				<Item>styled-components</Item>
				<Item>Jest</Item>
				<Item>Express</Item>
			</Grid>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 14rem 0 0 0;
`;

const InformationWrapper = styled.div`
	display: flex;

	@media (max-width: 1100px) {
		flex-direction: column-reverse;

		& div {
			margin: 0;
			margin-bottom: 3rem;
			transform: rotate(0deg);

			@media (max-width: 500px) {
				max-width: 300px;
				margin: 0 auto;
				margin-bottom: 2rem;
			}
		}
	}
`;

const ImageWrapper = styled.div`
	margin-left: 3rem;
	margin-top: -5rem;
	background-image: var(--gradient);
	padding: 4px;
	width: fit-content;
	height: fit-content;
	transform: rotate(6deg);

	& img {
		width: 100%;
		max-width: 400px;
		height: auto;
	}
`;

const Text = styled.p`
	max-width: 530px;
`;

const HeadingWrapper = styled.div`
	margin-top: 3rem;
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
`;

const SmallHeading = styled.h3`
	font-size: 0.9rem;
	margin-left: 0.5rem;
	font-family: var(--font-secondary);
	font-weight: 600;
`;

const Grid = styled.ul`
	padding: 0 1rem;
	width: fit-content;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const Item = styled.li`
	margin: 2px 1rem;
	font-family: var(--font-secondary);
	font-size: 0.9rem;
`;

export default About;
