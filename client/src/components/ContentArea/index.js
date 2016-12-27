/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import Wrapper from './styles/Wrapper';
import Scroller from './styles/Scroller';

export default function( props ) {
	return (
		<Wrapper>
			<Scroller { ...props } />
		</Wrapper>
	);
}
