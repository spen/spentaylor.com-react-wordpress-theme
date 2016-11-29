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
import { getActivePost, getPostsError } from 'state/blog/selectors';
import ActivePost from '../ActivePost';
import PostError from '../PostError';
import SkeletonPost from '../SkeletonPost';

export class BlogContent extends Component {

	render() {
		const { activePost, postsError } = this.props;

		if ( ! isEmpty( postsError ) ) {
			return <PostError />;
		}

		if ( ! activePost ) {
			return <SkeletonPost />;
		}

		return <ActivePost />;
	}

}

function mapStateToProps( state ) {
	const activePost = getActivePost( state );
	const postsError = getPostsError( state );

	return {
		activePost,
		postsError,
	};
}

export default connect( mapStateToProps )( BlogContent );
