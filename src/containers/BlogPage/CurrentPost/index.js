/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getCurrentPost } from 'state/blog/selectors';

export class CurrentPost extends Component {
	render() {
		const { currentPost } = this.props;

		if ( ! currentPost ) {
			return <p> loading... </p>;
		}

		return (
			<h2>Current: { currentPost.title }</h2>
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
