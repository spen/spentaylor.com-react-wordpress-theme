/**
 * Internal Dependencies
 */
import {
	POSTS_FETCH,
	POSTS_RECEIVE,
} from 'state/action-types';

export function fetchPosts() {
	return {
		type: POSTS_FETCH,
	};
}

export function recievePosts( payload ) {
	return {
		type: POSTS_RECEIVE,
		payload,
	};
}
