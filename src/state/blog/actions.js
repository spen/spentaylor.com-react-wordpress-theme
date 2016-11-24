/**
 * Internal Dependencies
 */
import {
	BLOG_POSTS_FETCH,
	BLOG_POSTS_RECEIVE,
	BLOG_SET_CURRENT_SLUG,
	BLOG_SET_DEFAULT_SLUG,
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

export function setCurrentSlug( slug ) {
	return {
		type: BLOG_SET_CURRENT_SLUG,
		slug,
	};
}

export function setDefaultSlug( posts ) {
	return {
		type: BLOG_SET_DEFAULT_SLUG,
		posts,
	};
}
