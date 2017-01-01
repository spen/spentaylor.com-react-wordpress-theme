/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Cell from 'components/Cell';
import WheelForContent from 'components/WheelForContent';
import SocialIconGroup from 'containers/SocialIconGroup';
import StyledIntro from './styles/Intro';
import StyledGreeting from './styles/Greeting';
import StyledLink from './styles/Link';

export const Intro = ( { onWheel } ) => (
	<StyledIntro onWheel={ onWheel }>
		<SocialIconGroup />
		<Cell>
			<StyledGreeting>Oh Hey! 👋</StyledGreeting>
			<p>
				I'm <StyledLink to="/about">Spen</StyledLink>,
				a (mostly Front-End) web developer.<br />
				Please check out <StyledLink to="/projects">my work</StyledLink> &amp;
				<StyledLink to="/blog"> my blog</StyledLink> and if there's anything else,
				feel free to <StyledLink to="/contact">get in touch</StyledLink>!
			</p>
		</Cell>
	</StyledIntro>
);

export default WheelForContent( Intro );
