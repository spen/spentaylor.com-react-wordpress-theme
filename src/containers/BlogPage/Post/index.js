/* eslint react/no-danger: 0 */

/**
 * External Dependencies
 */
import React, { noscript } from 'react';

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

export default ( { post } ) => {
	if ( ! post ) {
		return <noscript />;
	}

	return (
		<ContentContainer>
			<h1>{ post.title }</h1>
			<Paper>
				<CopyBlock
					dangerouslySetInnerHTML={ getContentHtml( post.content ) }
				/>
			</Paper>
		</ContentContainer>
	);
};
