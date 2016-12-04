/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import PageTransition from 'components/PageTransition';

export default ( { children, location } ) => (
	<PageTransition location={ location }>
		{ children }
	</PageTransition>
);
