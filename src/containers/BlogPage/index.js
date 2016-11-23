/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { fetchPosts } from 'state/blog/actions';
import CurrentPost from './CurrentPost';

export class BlogPage extends Component {

	componentWillMount() {
		this.props.onEnter();
	}

	render() {
		return (
			<div>
				<CurrentPost />
			</div>
		);
	}
}

function mapDispatchToProps( dispatch ) {
	return {
		onEnter: () => {
			dispatch( fetchPosts() );
		},
	};
}

export default connect( null, mapDispatchToProps )( BlogPage );
