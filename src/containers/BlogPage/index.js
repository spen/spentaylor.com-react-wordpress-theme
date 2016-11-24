/**
 * External Dependencies
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import {
	fetchPosts,
	setCurrentSlug,
} from 'state/blog/actions';

import { getPostBySlug } from 'state/blog/selectors';
import CurrentPost from './CurrentPost';

export class BlogPage extends Component {

	componentWillMount() {
		const { routedPost } = this.props;
		if ( ! routedPost ) {
			this.props.onEnter();
		}
	}

	render() {
		const { routedPost } = this.props;

		return (
			<div>
				{ !! routedPost && <CurrentPost /> }
			</div>
		);
	}
}

function mapStateToProps( state, props ) {
	const routedPost = getPostBySlug( state, props.params.slug );

	return {
		routedPost,
	};
}

function mapDispatchToProps( dispatch, props ) {
	return {
		onEnter: () => {
			dispatch( setCurrentSlug( props.params.slug ) );
			dispatch( fetchPosts() );
		},
	};
}

export default connect( mapStateToProps, mapDispatchToProps )( BlogPage );
