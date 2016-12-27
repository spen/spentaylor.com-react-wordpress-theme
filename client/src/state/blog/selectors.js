/**
 * External Dependencies
 */
import { indexOf, find, get } from 'lodash';

export function getPosts( state ) {
	return get( state, 'blog.list' );
}

export function getPostBySlug( state, slug ) {
	const posts = getPosts( state );

	if ( ! posts || ! slug ) {
		return null;
	}

	return find( posts, { slug } );
}

export function getPostById( state, id ) {
	const posts = getPosts( state );

	if ( ! posts || ! id ) {
		return null;
	}

	return find( posts, { ID: id } );
}

export function getActivePostSlug( state ) {
	return get( state, 'blog.activePostSlug' );
}

export function getNextPostSlug( state ) {
	const posts = getPosts( state );
	const activePostSlug = getActivePostSlug( state );
	const activePost = getPostBySlug( state, activePostSlug );

	const postIndex = indexOf( posts, activePost );

	if ( postIndex < 0 || ! activePost ) {
		return null;
	}

	const targetIndex = postIndex + 1;

	return targetIndex <= posts.length - 1 ? posts[ targetIndex ].slug : null;
}

export function getPreviousPostSlug( state ) {
	const posts = getPosts( state );
	const activePostSlug = getActivePostSlug( state );
	const activePost = getPostBySlug( state, activePostSlug );

	const postIndex = indexOf( posts, activePost );

	if ( ! postIndex || ! activePost ) {
		return null;
	}

	const targetIndex = postIndex - 1;

	return targetIndex >= 0 ? posts[ targetIndex ].slug : null;
}

export function getActivePost( state ) {
	const posts = getPosts( state );
	const activePostSlug = getActivePostSlug( state );

	if ( ! posts || ! activePostSlug ) {
		return null;
	}

	return getPostBySlug( state, activePostSlug );
}

export function getPostsError( state ) {
	return get( state, 'blog.postsError' );
}
