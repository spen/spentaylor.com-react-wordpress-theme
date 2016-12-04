/**
 * External Dependencies
 */
import { isEmpty } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

/**
 * Internal Dependencies
 */
import { getActivePost, getPostBySlug, getPostsError } from 'state/blog/selectors';
import Post from '../Post';
import PostError from '../PostError';
import SkeletonPost from '../SkeletonPost';

export const BlogContent = ( { activePost, post, postsError } ) => {
	if ( ! isEmpty( postsError ) ) {
		return <PostError />;
	}

	if ( ! post && ! activePost ) {
		return <SkeletonPost />;
	}

	return <Post post={ post || activePost } />;
};

export default connect(
	( state, props ) => ( {
		activePost: getActivePost( state ),
		post: getPostBySlug( state, props.params.slug ),
		postsError: getPostsError( state ),
	} )
)( BlogContent );
