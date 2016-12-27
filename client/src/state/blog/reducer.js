/**
 * Internal Dependencies
 */
import {
	BLOG_POSTS_ERROR_CLEAR,
	BLOG_POSTS_ERROR_SET,
	BLOG_POSTS_RECEIVE,
	BLOG_SET_ACTIVE_POST_SLUG,
} from 'state/action-types';
import initialState from './initialState';

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case BLOG_POSTS_RECEIVE: {
			const { found, posts } = action.payload.data;

			return {
				...state,
				list: posts,
				total: found,
			};
		}
		case BLOG_SET_ACTIVE_POST_SLUG:
			return {
				...state,
				activePostSlug: action.slug,
			};
		case BLOG_POSTS_ERROR_SET:
			return {
				...state,
				postsError: {
					message: action.message,
				},
			};
		case BLOG_POSTS_ERROR_CLEAR:
			return {
				...state,
				postsError: initialState.postsError,
			};
		default:
			return state;
	}
}
