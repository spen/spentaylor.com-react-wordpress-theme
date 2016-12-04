/* eslint react/no-danger: 0 */

/**
 * External Dependencies
 */
import React, { Component } from 'react';

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

export class Post extends Component {
	render() {
		const { post } = this.props;

		if ( ! post ) {
			return null;
		}

		return (
			<ContentContainer>
				<h2>{ post.title }</h2>
				<Paper>
					<CopyBlock
						dangerouslySetInnerHTML={ getContentHtml( post.content ) }
					/>
				</Paper>
			</ContentContainer>
		);
	}
}

export default Post;
