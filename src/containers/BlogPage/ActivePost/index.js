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
import { getActivePost } from 'state/blog/selectors';

function getContentHtml( content ) {
	// TODO: Explore html sanitizers to set this safely.
	return {
		__html: content,
	};
}

export class ActivePost extends Component {

	render() {
		const { activePost } = this.props;

		if ( ! activePost ) {
			return <p> loading... </p>;
		}

		return (
			<div>
				<h2>Active: { activePost.title }</h2>
				<Paper>
					<div dangerouslySetInnerHTML={ getContentHtml( activePost.content ) }></div>
				</Paper>
			</div>
		);
	}
}

function mapStateToProps( state ) {
	const activePost = getActivePost( state );

	return {
		activePost,
	};
}

export default connect( mapStateToProps )( ActivePost );
