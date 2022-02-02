import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading/SectionHeading";
import instablamScreenshot from "../../images/instablam-screenshot.png";
import { ExternalLink, GitHub } from "react-feather";

function Projects() {
	return (
		<Wrapper>
			<SectionHeading title="Projekt" />
			<Project>
				<ProjectHeading>Instablam</ProjectHeading>
				<ProjectContent>
					<ScreenshotWrapper>
						<Screenshot src={instablamScreenshot} />
					</ScreenshotWrapper>
					<div>
						<Description>
							Instablam är en PWA där användaren med hjälp av enhetens kamera
							tar foton och adderar passande filter. Fotona sparas därefter och
							finns tillgängliga i ett galleri så att användaren kan bläddra
							bland alla tagna bilder. När det kommer till denna app är jag
							särskilt stolt över arbetet jag har lagt ner för att göra
							innehållet tillgänglighetsanpassat.
						</Description>
						<TechnologyList>
							<Technology>HTML</Technology>
							<Technology>CSS</Technology>
							<Technology>JavaScript</Technology>
							<Technology>React</Technology>
							<Technology>styled-components</Technology>
						</TechnologyList>
						<Link
							href="https://matildamared-instablam.netlify.app"
							target="_blank"
						>
							Live demo <ExternalLink size={16} />
						</Link>
						<Link
							href="https://github.com/MatildaMared/instablam"
							target="_blank"
						>
							GitHub repo <GitHub size={16} />
						</Link>
					</div>
				</ProjectContent>
			</Project>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 18rem 0 0 0;
`;

const Project = styled.article`
	padding: 2rem;
	border: 1px solid rgba(255, 255, 255, 0.05);
`;

const ProjectHeading = styled.h3`
	width: 100%;
	text-align: right;
	font-size: 1.2rem;
	font-family: var(--font-secondary);
	margin-bottom: 2rem;
	position: relative;

	&::after {
		content: "";
		height: 2px;
		width: 200px;
		background-color: var(--color-purple);
		background-image: var(--gradient);
		position: absolute;
		top: 100%;
		margin-top: 0.5rem;
		right: 0;
	}
`;

const Screenshot = styled.img`
	width: 100%;
	height: auto;
`;

const ProjectContent = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const Description = styled.p`
	text-align: right;
`;

const ScreenshotWrapper = styled.figure`
	display: flex;
	width: 100%;
	min-width: 300px;
	max-width: 500px;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	margin-right: 1rem;
`;

const TechnologyList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: flex-end;
	font-family: var(--font-secondary);
	font-size: 0.8rem;
	color: var(--color-purple);
`;

const Technology = styled.li`
	display: inline-block;
	margin: 0.25rem;
	padding: 1px 3px;
	background-color: rgba(255, 255, 255, 0.05);

	&:last-child {
		margin-right: 0;
	}
`;

const Link = styled.a`
	text-align: right;
	display: block;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin: 1rem 0;
	font-family: var(--font-secondary);
	font-size: 0.9rem;
	color: var(--color-gray);
	text-decoration: none;
	transition: all 0.3s;

	& svg {
		margin-left: 0.5rem;
	}

	&:hover {
		color: var(--color-purple);
	}
`;

export default Projects;
