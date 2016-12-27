/**
 * External Dependencies
 */
import React from 'react';
import DocumentTitle from 'react-document-title';

/**
 * Internal Dependencies
 */
import PageTransition from 'components/PageTransition';

export default ( { children, location } ) => (
	<DocumentTitle title="Projects | Spen Taylor">
		<PageTransition location={ location }>
			{ children }
		</PageTransition>
	</DocumentTitle>
);
