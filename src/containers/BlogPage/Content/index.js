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
import { getPostBySlug, getPostsError } from 'state/blog/selectors';
import Post from '../Post';
import PostError from '../PostError';
import SkeletonPost from '../SkeletonPost';

export class BlogContent extends Component {

	render() {
		const { post, postsError } = this.props;

		if ( ! isEmpty( postsError ) ) {
			return <PostError />;
		}

		if ( ! post ) {
			return <SkeletonPost />;
		}

		return <Post post={ post } />;
	}

}

function mapStateToProps( state, props ) {
	const post = getPostBySlug( state, props.params.slug );
	const postsError = getPostsError( state );

	return {
		post,
		postsError,
	};
}

export default connect( mapStateToProps )( BlogContent );
