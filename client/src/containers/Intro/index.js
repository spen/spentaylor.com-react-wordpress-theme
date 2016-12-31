/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import Cell from 'components/Cell';
import SocialIconGroup from 'containers/SocialIconGroup';
import StyledIntro from './styles/intro';
import WheelForContent from 'components/WheelForContent';

const WhiteP = styled.p`
	color: white;
`;

const StyledGreeting = styled.h1`
	color: rgba(255,90,110,1);
	font-size: 15vw;
	text-shadow: 0 6px rgba(125,30,40,1);
	margin: 0.2em auto;

	@media (min-width: 960px) {
		font-size: 8em;
	}

`;

const StyledLink = styled( Link )`
	color: #00c8b4;
`;

export class Intro extends Component {
	render() {
		return (
			<StyledIntro onWheel={ this.props.onWheel }>
				<SocialIconGroup />
				<Cell>
					<StyledGreeting>Oh Hey! 👋</StyledGreeting>
					<WhiteP>
						I'm <StyledLink to="/about">Spen</StyledLink>,
						a (mostly Front-End) web developer.<br />
						Please check out <StyledLink to="/projects">my work</StyledLink> &amp;
						<StyledLink to="/blog"> my blog</StyledLink> and if there's anything else,
						feel free to <StyledLink to="/contact">get in touch</StyledLink>!
					</WhiteP>
				</Cell>
			</StyledIntro>
		);
	}
}

export default WheelForContent( Intro );
