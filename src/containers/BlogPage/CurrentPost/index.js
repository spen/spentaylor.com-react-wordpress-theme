/* eslint react/no-danger: 0 */

/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import Paper from 'components/Paper';
import { getCurrentPost } from 'state/blog/selectors';

function getContentHtml( content ) {
	// TODO: Explore html sanitizers to set this safely.
	return {
		__html: content,
	};
}

export class CurrentPost extends Component {

	render() {
		const { currentPost } = this.props;

		if ( ! currentPost ) {
			return <p> loading... </p>;
		}

		return (
			<div>
				<h2>Current: { currentPost.title }</h2>
				<Paper>
					<div dangerouslySetInnerHTML={ getContentHtml( currentPost.content ) }></div>
				</Paper>
			</div>
		);
	}
}

function mapStateToProps( state ) {
	const currentPost = getCurrentPost( state );

	return {
		currentPost,
	};
}

export default connect( mapStateToProps )( CurrentPost );
