/* eslint react/no-danger: 0 */

/**
 * External Dependencies
 */
import React from 'react';

/**
 * Internal Dependencies
 */
import ContentContainer from 'components/ContentContainer';
import CopyBlock from 'components/CopyBlock';
import Paper from 'components/Paper';

function getContentHtml( content ) {
	// TODO: Explore html sanitizers to set this safely.
	return {
		__html: content,
	};
}

export default ( { project } ) => {
	if ( ! project ) {
		return null;
	}

	return (
		<ContentContainer>
			<h2>{ project.title }</h2>
			<Paper>
				<CopyBlock
					dangerouslySetInnerHTML={ getContentHtml( project.content ) }
				/>
			</Paper>
		</ContentContainer>
	);
};
