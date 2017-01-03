/**
 * External Dependencies
 */
import { get } from 'lodash';
import React from 'react';
import { RouteTransition } from 'react-router-transition';

const leftState = { opacity: 0, translateX: 30 };
const rightState = { opacity: 0, translateX: -30 };
const activeState = { opacity: 1, translateX: 0 };

const mapStyles = styles => ( {
	transform: `translateX(${ styles.translateX }%)`,
	opacity: styles.opacity,
	position: 'absolute',
	width: '100%',
} );

const getTransitionStates = direction => {
	if ( direction === 'next' ) {
		return {
			atEnter: leftState,
			atLeave: rightState,
		};
	}

	if ( direction === 'previous' ) {
		return {
			atEnter: rightState,
			atLeave: leftState,
		};
	}

	return {
		atEnter: activeState,
		atLeave: activeState,
	};
};

const PageTransition = ( { children, location } ) => {
	const direction = get( location, 'state.direction' );
	const transitionStates = getTransitionStates( direction );

	return (
		<RouteTransition
			{ ...transitionStates }
			atActive={ activeState }
			mapStyles={ mapStyles }
			pathname={ location.pathname }
			runOnMount={ false }
		>
			{ children }
		</RouteTransition>
	);
};

export default PageTransition;
