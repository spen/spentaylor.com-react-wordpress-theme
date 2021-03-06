/* eslint react/no-danger: 0 */

/**
 * External Dependencies
 */
import React, { noscript } from 'react';
import { get } from 'lodash';

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
			<h1
				dangerouslySetInnerHTML={ getContentHtml( get( post, 'title.rendered' ) ) }
			/>
			<Paper>
				<CopyBlock
					dangerouslySetInnerHTML={ getContentHtml( get( post, 'content.rendered' ) ) }
				/>
			</Paper>
		</ContentContainer>
	);
};
