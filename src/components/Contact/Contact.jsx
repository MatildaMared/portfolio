import React from "react";
import styled from "styled-components";
import SectionHeading from "../SectionHeading/SectionHeading";
import { GitHub, Linkedin, Mail } from "react-feather";

function Contact() {
	return (
		<Wrapper id="contact">
			<SectionHeading title={"Kontakt"} />
			<Text>
				Om du har några frågor, är intresserad av att veta mer om mig eller
				kanske bara vill ta en kaffe och snacka lite kod är du varmt välkommen
				att höra av dig! ☕️ Jag svarar oftast på mail inom 24h, men påminn mig
				gärna om du tror att jag har missat ditt mail! 😊
			</Text>
			<nav>
				<List>
					<li>
						<Mail size={26} />
						<div>
							<ContactHeading>Mail</ContactHeading>
							<Link href="mailto:matildamared@live.se">
								matildamared@live.se
							</Link>
						</div>
					</li>
					<li>
						<Linkedin size={26} />
						<div>
							<ContactHeading>LinkedIn</ContactHeading>
							<Link
								href="https://www.linkedin.com/in/matilda-mared/"
								target="_blank"
							>
								https://www.linkedin.com/in/matilda-mared/
							</Link>
						</div>
					</li>
					<li>
						<GitHub size={26} />
						<div>
							<ContactHeading>GitHub</ContactHeading>
							<Link href="https://github.com/MatildaMared" target="_blank">
								https://github.com/MatildaMared
							</Link>
						</div>
					</li>
				</List>
			</nav>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	max-width: var(--max-width);
	margin: 0 auto;
	padding: 14rem 0 0 0;
`;

const List = styled.ul`
	padding: 0;
	list-style-type: none;
	margin-top: 2rem;

	& li {
		margin-bottom: 2rem;
		display: flex;
		align-items: center;

		& div {
			display: flex;
			flex-direction: column;
		}

		& svg {
			margin-right: 1rem;
		}
	}
`;

const Text = styled.p`
	max-width: 560px;
`;

const Link = styled.a`
	color: var(--color-purple);
	text-decoration: none;
	font-family: var(--font-secondary);
	transition: all 0.3s;
	font-size: 0.9rem;

	&:hover {
		color: var(--color-gray);
	}
`;

const ContactHeading = styled.p`
	font-size: 1rem;
	font-family: var(--font-secondary);
	display: flex;
	align-items: center;
	margin-bottom: 0;
	font-size: 0.9rem;
	font-weight: 500;

	& svg {
		margin-right: 0.5rem;
	}
`;

export default Contact;
