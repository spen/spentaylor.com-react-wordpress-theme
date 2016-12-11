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
import FeaturedImage from '../FeaturedImage';

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
			<h1>{ project.title }</h1>
			<Paper>
				<FeaturedImage src={ project.featured_image } />
				<CopyBlock
					dangerouslySetInnerHTML={ getContentHtml( project.content ) }
				/>
			</Paper>
		</ContentContainer>
	);
};
