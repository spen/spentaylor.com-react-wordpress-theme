/**
 * External Dependencies
 */
import React from 'react';

export default function( { width = '40%', inline } ) {
	return (
		<p
			style={ {
				width,
				height: '1em',
				backgroundColor: '#ddd',
				marginLeft: '1em',
				marginBottom: 0,
				display: inline ? 'inline-block' : 'block',
			} }
		/>
	);
}
