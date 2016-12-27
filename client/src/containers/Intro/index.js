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

import HeroSvg from 'assets/images/hero.svg';

const WhiteP = styled.p`
	color: white;
`;

const StyledLink = styled( Link )`
	color: #00c8b4;
`;

export default class Intro extends Component {
	render() {
		return (
			<StyledIntro>
				<SocialIconGroup />
				<Cell>
					<HeroSvg />
					<WhiteP>
						Hi! I'm <StyledLink to="/about">Spen</StyledLink>,
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
