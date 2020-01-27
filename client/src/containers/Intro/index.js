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
import StyledCopy from './styles/Copy';
import StyledLink from './styles/Link';
import StyledGreeting from './styles/Greeting';

export const Intro = ( { onWheel } ) => (
	<StyledIntro onWheel={ onWheel }>
		<SocialIconGroup />
		<Cell>
			{/* <h3>Hi, I'm <StyledLink to="/about">Spen Taylor</StyledLink>...</h3> */}
			<StyledGreeting>Hi, I'm Spen Taylor...</StyledGreeting>
			<StyledCopy>
				I'm a full stack engineer with a focus on React,
				Node and other JavaScript technologies.<br />
				You can see some of my
				<StyledLink to="/projects"> work and projects, here</StyledLink>.<br />
				{/* Outside of software development, my interests cover  */}
				{/* health, diet, mindfulness, philosophy & music,  */}
				{/* as well as sports like surfing and Brazilian jiu jitsu. */}
				{/* I plan to <StyledLink to="/blog">blog</StyledLink> */}
				{/* and if there's anything else, */}
				If you're interested in working with me, I'd love for you to
				<StyledLink to="/contact"> get in touch </StyledLink>
				or<StyledLink to="/contact"> connect</StyledLink>!
			</StyledCopy>
		</Cell>
	</StyledIntro>
);

export default WheelForContent( Intro );
