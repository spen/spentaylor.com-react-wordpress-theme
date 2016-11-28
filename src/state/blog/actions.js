/**
 * Internal Dependencies
 */
import {
	BLOG_POSTS_ERROR_CLEAR,
	BLOG_POSTS_ERROR_SET,
	BLOG_POSTS_FETCH,
	BLOG_POSTS_RECEIVE,
	BLOG_SET_ACTIVE_POST,
	BLOG_SET_ACTIVE_POST_SLUG,
} from 'state/action-types';

export function fetchPosts() {
	return {
		type: BLOG_POSTS_FETCH,
	};
}

export function recievePosts( payload ) {
	return {
		type: BLOG_POSTS_RECEIVE,
		payload,
	};
}

export function setActivePost( slug ) {
	return {
		type: BLOG_SET_ACTIVE_POST,
		slug,
	};
}

export function setActivePostSlug( slug ) {
	return {
		type: BLOG_SET_ACTIVE_POST_SLUG,
		slug,
	};
}

export function setPostsError( message ) {
	return {
		type: BLOG_POSTS_ERROR_SET,
		message,
	};
}

export function clearPostsError() {
	return {
		type: BLOG_POSTS_ERROR_CLEAR,
	};
}
