/* eslint react/no-danger: 0 */

/**
 * External Dependencies
 */
import { isEmpty } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getActivePost, getPostBySlug, getPostsError } from 'state/blog/selectors';
import Post from '../Post';
import PostError from '../PostError';
import SkeletonPost from '../SkeletonPost';

export class BlogContent extends Component {

	render() {
		const { activePost, post, postsError } = this.props;

		if ( ! isEmpty( postsError ) ) {
			return <PostError />;
		}

		if ( ! post && ! activePost ) {
			return <SkeletonPost />;
		}

		return <Post post={ post || activePost } />;
	}

}

function mapStateToProps( state, props ) {
	const activePost = getActivePost( state );
	const post = getPostBySlug( state, props.params.slug );
	const postsError = getPostsError( state );

	return {
		activePost,
		post,
		postsError,
	};
}

export default connect( mapStateToProps )( BlogContent );
