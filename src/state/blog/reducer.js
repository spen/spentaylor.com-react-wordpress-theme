/**
 * Internal Dependencies
 */
import { first } from 'lodash';

/**
 * Internal Dependencies
 */
import {
	BLOG_POSTS_RECEIVE,
	BLOG_SET_CURRENT_SLUG,
} from 'state/action-types';
import initialState from './initialState';

export default function( state = initialState, action ) {
	switch ( action.type ) {
		case BLOG_POSTS_RECEIVE: {
			const { found, posts } = action.payload.data;
			let currentPostSlug = state.currentPostSlug;

			if ( ! currentPostSlug ) {
				const firstPost = first( posts );
				currentPostSlug = firstPost ? firstPost.slug : null;
			}

			return {
				...state,
				currentPostSlug,
				list: posts,
				total: found,
			};
		}
		case BLOG_SET_CURRENT_SLUG:
			return {
				...state,
				currentPostSlug: action.slug,
			};
		default:
			return state;
	}
}
