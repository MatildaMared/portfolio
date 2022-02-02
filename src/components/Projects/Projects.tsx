import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading/SectionHeading";
import instablamScreenshot from "../../images/instablam-screenshot.png";
import { ExternalLink, GitHub } from "react-feather";

function Projects() {
	return (
		<Wrapper id="projects">
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
			<Project>
				<ProjectHeading>Linkshare</ProjectHeading>
				<ProjectContent>
					<PlaceholderImage>
						<span>Kommer snart</span>
					</PlaceholderImage>
					<div>
						<Description>
							Linkshare är en app där användaren kan skapa listor med länkar som
							sedan går att dela med vänner. Idén föddes tidigt i min utbildning
							till frontendutvecklare när jag insåg hur smidigt det är att kunna
							dela större länksamlingar med vänner. Linkshare är en
							fullstackapplikation, byggd med React, NodeJS, Express & MongoDB.
						</Description>
						<TechnologyList>
							<Technology>HTML</Technology>
							<Technology>CSS</Technology>
							<Technology>JavaScript</Technology>
							<Technology>React</Technology>
							<Technology>styled-components</Technology>
							<Technology>Node.js</Technology>
							<Technology>Express</Technology>
							<Technology>MongoDB</Technology>
							<Technology>jest</Technology>
						</TechnologyList>
						<Link
							href="https://github.com/MatildaMared/linkshare"
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

	&:not(:last-child) {
		margin-bottom: 6rem;
	}
`;

const PlaceholderImage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	min-width: 300px;
	max-width: 500px;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	background-color: rgba(0, 0, 0, 0.1);
	height: 100%;
	min-height: 300px;
	margin: 0 auto;
	margin-right: 1rem;

	@media (max-width: 900px) {
		margin-bottom: 2rem;
	}

	& span {
		transform: rotate(-15deg);
		color: var(--color-gray);
	}
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

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const Description = styled.p`
	text-align: right;
`;

const ScreenshotWrapper = styled.figure`
	display: flex;
	width: 100%;
	min-width: 300px;
	max-width: 500px;
	height: auto;
	border-radius: 0.5rem;
	overflow: hidden;
	box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
	margin: 0 auto;
	margin-right: 1rem;

	@media (max-width: 900px) {
		margin-bottom: 2rem;
	}
`;

const TechnologyList = styled.ul`
	list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	font-family: var(--font-secondary);
	font-size: 0.8rem;
	color: var(--color-purple);
`;

const Technology = styled.li`
	display: inline-block;
	margin: 0.25rem;
	padding: 1px 3px;
	background-color: rgba(255, 255, 255, 0.05);
	white-space: nowrap;

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
