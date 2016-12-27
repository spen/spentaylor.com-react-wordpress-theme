/**
 * External Dependencies
 */
import React from 'react';
import { Motion, spring } from 'react-motion';

/**
 * Internal Dependencies
 */
import StyledWrapper from './styles';

const springConfig = {
	stiffness: 290,
	damping: 50,
};

const introButtonState = { top: spring( 0, springConfig ) };
const contentButonState = { top: spring( -60, springConfig ) };

export default ( { children, showContent } ) => (
	<Motion style={ showContent ? introButtonState : contentButonState } >
		{ ( { top } ) => (
			<StyledWrapper
				style={ { transform: `translateY(${ top }px)` } }
			>
				{ children }
			</StyledWrapper>
		) }
	</Motion>
);

