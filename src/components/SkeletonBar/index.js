/**
 * External Dependencies
 */
import React from 'react';
import { Motion, spring } from 'react-motion';

const springConfig = {
	stiffness: 12,
	// damping 0 causes infinite looping
	damping: 0,
};

export default function( { width = '40%', inline } ) {
	return (
		<Motion
			defaultStyle={ { x: 0.4 } }
			style={ { x: spring( 1, springConfig ) } }
		>
			{ values => (
				<p
					style={ {
						width: width,
						opacity: values.x,
						height: '1em',
						backgroundColor: '#ddd',
						marginLeft: '1em',
						marginBottom: 0,
						display: inline ? 'inline-block' : 'block',
					} }
				/>
			) }
		</Motion>
	);
}
