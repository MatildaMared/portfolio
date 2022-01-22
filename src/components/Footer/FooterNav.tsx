import React from "react";
import styled from "styled-components";
import { GitHub, Linkedin, Instagram, Twitter, AtSign } from "react-feather";
import SrText from "../SrText/SrText";

function FooterNav() {
	return (
		<Nav>
			<List>
				<Item>
					<a
						href="https://github.com/MatildaMared"
						title="GitHub"
						target="_blank"
						rel="noreferrer"
					>
						<GitHub size={24} aria-hidden="true" />
						<SrText text="GitHub" />
					</a>
				</Item>
				<Item>
					<a
						href="https://www.linkedin.com/in/matilda-mared/"
						title="LinkedIn"
						target="_blank"
						rel="noreferrer"
					>
						<Linkedin size={24} aria-hidden="true" />
						<SrText text="LinkedIn" />
					</a>
				</Item>
				<Item>
					<a
						href="https://www.instagram.com/matildamared/"
						title="Instagram"
						target="_blank"
						rel="noreferrer"
					>
						<Instagram size={24} aria-hidden="true" />
						<SrText text="Instagram" />
					</a>
				</Item>
				<Item>
					<a
						href="https://twitter.com/matildamared1"
						title="Twitter"
						target="_blank"
						rel="noreferrer"
					>
						<Twitter size={24} aria-hidden="true" />
						<SrText text="Twitter" />
					</a>
				</Item>
				<Item>
					<a href="mailto:matildamared@live.se" title="Email">
						<AtSign size={24} aria-hidden="true" />
						<SrText text="Email" />
					</a>
				</Item>
			</List>
		</Nav>
	);
}

const List = styled.ul`
	display: flex;
	list-style-type: none;
	padding: 0;
`;

const Item = styled.li`
	&:not(:last-child) {
		margin-right: 1rem;
	}

	& a {
		color: var(--color-gray);
		transition: all 0.3s;

		&:hover {
			color: var(--color-purple);
		}
	}
`;

const Nav = styled.nav`
	display: flex;
`;

export default FooterNav;
