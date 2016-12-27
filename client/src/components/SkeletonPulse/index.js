/**
 * External Dependencies
 */
import React from 'react';
import { Motion, spring } from 'react-motion';

const pulseConfig = {
	stiffness: 12,
	// damping 0 causes infinite looping
	damping: 0,
};

const pulse = spring( 1, pulseConfig );

export default function( { children } ) {
	return (
		<Motion
			defaultStyle={ { opacity: 0.4 } }
			style={ { opacity: pulse } }
		>
			{ function( { opacity } ) {
				return <div style={ { opacity } }>{ children }</div>;
			} }
		</Motion>
	);
}
